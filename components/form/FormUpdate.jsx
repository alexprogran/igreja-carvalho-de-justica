"use client";

import { useMemo, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./FormUpdate.module.css";

const DEFAULT_FIELD_CONFIG = {
  type: "text",
  autoComplete: "off",
};

function normalizeText(value) {
  return String(value ?? "").toLowerCase();
}

function isConfirmPasswordField(field) {
  const name = normalizeText(field.name);
  const placeholder = normalizeText(field.placeholder);
  const looksLikeConfirm =
    name.includes("confirm") ||
    name.includes("confirma") ||
    placeholder.includes("confirm") ||
    placeholder.includes("confirma");

  const looksLikePassword =
    name.includes("password") || name.includes("senha") || placeholder.includes("password") || placeholder.includes("senha");

  return looksLikeConfirm && looksLikePassword;
}

function normalizeCampo(campo) {
  if (!campo) return [];
  if (Array.isArray(campo)) {
    return campo.map((item) => {
      if (typeof item === "string") {
        return { ...DEFAULT_FIELD_CONFIG, name: item, placeholder: item };
      }

      return {
        ...DEFAULT_FIELD_CONFIG,
        ...item,
        name: item.name ?? item.campo,
        placeholder: item.placeholder ?? item.name ?? item.campo,
      };
    });
  }

  if (typeof campo === "string") {
    return [{ ...DEFAULT_FIELD_CONFIG, name: campo, placeholder: campo }];
  }

  return [
    {
      ...DEFAULT_FIELD_CONFIG,
      ...campo,
      name: campo.name ?? campo.campo,
      placeholder: campo.placeholder ?? campo.name ?? campo.campo,
    },
  ];
}

export default function Form({ campo, buttonText = "Criar Conta", onPrimaryAction }) {
  const fields = useMemo(() => normalizeCampo(campo), [campo]);
  const initialFormData = useMemo(
    () =>
      fields.reduce(
        (acc, field) => ({
          ...acc,
          [field.name]: String(field.value ?? field.initialValue ?? ""),
        }),
        {}
      ),
    [fields]
  );

  const hasPasswordAndConfirmation = useMemo(() => {
    const passwordFields = fields.filter((field) => field.type === "password");
    const hasConfirm = passwordFields.some((field) => isConfirmPasswordField(field));
    const hasMainPassword = passwordFields.some((field) => !isConfirmPasswordField(field));
    return hasConfirm && hasMainPassword;
  }, [fields]);

  const [showPassword, setShowPassword] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [deletedFields, setDeletedFields] = useState({});
  const [editableFields, setEditableFields] = useState({});
  const [hasAnyCharacterChange, setHasAnyCharacterChange] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState(() => initialFormData);
  const inputRefs = useRef({});

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

  const validationErrors = useMemo(() => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordFields = fields.filter((field) => field.type === "password");
    const mainPasswordField = passwordFields.find((field) => !isConfirmPasswordField(field));
    const confirmPasswordField = passwordFields.find((field) => isConfirmPasswordField(field));

    fields.forEach((field) => {
      const value = formData[field.name] ?? "";

      if (field.type === "email" && value.trim() !== "" && !emailRegex.test(value.trim())) {
        errors[field.name] = "Email inválido";
      }

      if (field.type === "password" && value.length > 0 && value.length < 8) {
        errors[field.name] = "A senha deve ter no mínimo 8 caracteres";
      }
    });

    if (mainPasswordField && confirmPasswordField) {
      const passwordValue = formData[mainPasswordField.name] ?? "";
      const confirmValue = formData[confirmPasswordField.name] ?? "";

      if (passwordValue.length > 0 && confirmValue.length > 0 && passwordValue !== confirmValue) {
        errors[confirmPasswordField.name] = "As senhas não coincidem";
      }
    }

    return errors;
  }, [fields, formData]);

  const isFormValid = isFormComplete && Object.keys(validationErrors).length === 0;
  const canDiscard = hasAnyCharacterChange;
  const canSave = hasAnyCharacterChange && isFormValid;

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((current) => {
      const previousValue = current[name] ?? "";
      const hasAnyEdit = value !== previousValue;
      const hasDeletion = value.length < previousValue.length;

      if (hasAnyEdit) {
        setHasAnyCharacterChange(true);
      }

      if (hasDeletion) {
        setDeletedFields((tracked) => ({
          ...tracked,
          [name]: true,
        }));
      }

      return {
        ...current,
        [name]: value,
      };
    });
  };

  const handleInputBlur = ({ target: { name } }) => {
    setTouchedFields((current) => ({
      ...current,
      [name]: true,
    }));
    setFocusedField((current) => (current === name ? null : current));
  };

  const handleInputFocus = ({ target: { name } }) => {
    setFocusedField(name);
  };

  const resetToInitialState = () => {
    setFormData(initialFormData);
    setTouchedFields({});
    setDeletedFields({});
    setEditableFields({});
    setHasAnyCharacterChange(false);
    setFocusedField(null);
    setShowPassword(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSave || !onPrimaryAction) return;

    const maybePromise = onPrimaryAction(formData);
    const isPromiseLike = Boolean(maybePromise && typeof maybePromise.then === "function");

    if (isPromiseLike) {
      Promise.resolve(maybePromise).finally(() => {
        resetToInitialState();
      });
      return;
    }

    resetToInitialState();
  };

  const handleEnableFieldEditing = (fieldName) => {
    setEditableFields((current) => ({
      ...current,
      [fieldName]: true,
    }));

    const input = inputRefs.current[fieldName];
    if (input) {
      input.focus();
    }
  };

  const handleDiscardClick = () => {
    if (!canDiscard) return;
    resetToInitialState();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((field) => {
        const isPasswordField = field.type === "password";
        const hasDeletedChars = Boolean(deletedFields[field.name]);
        const isFieldEditable = Boolean(editableFields[field.name]);
        const isConfirmField = isPasswordField && isConfirmPasswordField(field);
        const shouldShowEye = isPasswordField && (!hasPasswordAndConfirmation || !isConfirmField);
        const isFieldActive = focusedField === field.name || Boolean((formData[field.name] ?? "").length);
        const fieldType = isPasswordField && showPassword ? "text" : field.type;
        const fieldAutoComplete = field.autoComplete ?? (field.type === "password" ? "new-password" : "off");
        const isEmailFocused = field.type === "email" && focusedField === field.name;
        const isPasswordFocused = field.type === "password" && focusedField === field.name;
        const hasError = Boolean(
          validationErrors[field.name] && touchedFields[field.name] && !isEmailFocused && !isPasswordFocused
        );
        const inputClassName = hasError ? `${styles.input} ${styles.inputError}` : styles.input;

        if (isPasswordField) {
          return (
            <div key={field.name} className={styles.fieldWrap}>
              <div className={styles.passwordWrap}>
                <input
                  ref={(node) => {
                    inputRefs.current[field.name] = node;
                  }}
                  className={inputClassName}
                  type={fieldType}
                  name={field.name}
                  placeholder=" "
                  autoComplete={fieldAutoComplete}
                  value={formData[field.name] ?? ""}
                  readOnly={!isFieldEditable}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <span
                  className={`${styles.floatingLabel} ${isFieldActive ? styles.floatingLabelActive : ""}`}
                  aria-hidden="true"
                >
                  {field.placeholder}
                </span>
                <button
                  type="button"
                  className={`${styles.penIcon} ${styles.penIconPassword} ${
                    isFieldEditable ? styles.penIconEnabled : ""
                  } ${
                    hasDeletedChars ? styles.penIconEdited : ""
                  }`.trim()}
                  onClick={() => handleEnableFieldEditing(field.name)}
                  aria-label={`Habilitar edicao de ${field.placeholder}`}
                >
                  <FaPen size={14} />
                </button>
                {shouldShowEye ? (
                  <button
                    type="button"
                    className={styles.eyeButton}
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                  </button>
                ) : null}
              </div>
              {hasError ? <p className={styles.errorText}>{validationErrors[field.name]}</p> : null}
            </div>
          );
        }

        return (
          <div key={field.name} className={styles.fieldWrap}>
            <div className={styles.inputWrap}>
              <input
                ref={(node) => {
                  inputRefs.current[field.name] = node;
                }}
                className={inputClassName}
                type={fieldType}
                name={field.name}
                placeholder=" "
                autoComplete={fieldAutoComplete}
                value={formData[field.name] ?? ""}
                readOnly={!isFieldEditable}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <span
                className={`${styles.floatingLabel} ${isFieldActive ? styles.floatingLabelActive : ""}`}
                aria-hidden="true"
              >
                {field.placeholder}
              </span>
              <button
                type="button"
                className={`${styles.penIcon} ${isFieldEditable ? styles.penIconEnabled : ""} ${
                  hasDeletedChars ? styles.penIconEdited : ""
                }`.trim()}
                onClick={() => handleEnableFieldEditing(field.name)}
                aria-label={`Habilitar edicao de ${field.placeholder}`}
              >
                <FaPen size={14} />
              </button>
            </div>
            {hasError ? <p className={styles.errorText}>{validationErrors[field.name]}</p> : null}
          </div>
        );
      })}

      <div className={styles.actionsRow}>
        <button
          type="button"
          className={`${styles.discardButton} ${!canDiscard ? styles.actionButtonDisabled : ""}`.trim()}
          onClick={handleDiscardClick}
          disabled={!canDiscard}
        >
          Descartar
        </button>

        <button
          type="submit"
          className={`${styles.primaryButton} ${canSave ? styles.primaryButtonActive : ""}`.trim()}
          disabled={!canSave}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
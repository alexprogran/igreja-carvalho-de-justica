"use client";

import { useMemo, useRef, useState } from "react";
import { IoCloudUploadOutline, IoContractOutline, IoEyeOffOutline, IoEyeOutline, IoExpandOutline } from "react-icons/io5";
import Button from "@/components/layout/Button";
import styles from "./FormPublic.module.css";

const DEFAULT_FIELD_CONFIG = {
  type: "text",
  autoComplete: "off",
};

const VIDEO_SOURCES = [
  { key: "camera", label: "Câmera", ariaLabel: "Selecionar vídeo pela câmera" },
  { key: "gallery", label: "Galeria", ariaLabel: "Selecionar vídeo da galeria" },
];

function normalizeText(value) {
  return String(value ?? "").toLowerCase();
}

function isConfirmPasswordField(field) {
  const name = normalizeText(field.name);
  const placeholder = normalizeText(field.placeholder);
  const label = normalizeText(field.label);
  const looksLikeConfirm =
    name.includes("confirm") ||
    name.includes("confirma") ||
    placeholder.includes("confirm") ||
    placeholder.includes("confirma") ||
    label.includes("confirm") ||
    label.includes("confirma");

  const looksLikePassword =
    name.includes("password") ||
    name.includes("senha") ||
    placeholder.includes("password") ||
    placeholder.includes("senha") ||
    label.includes("password") ||
    label.includes("senha");

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
        label: item.label ?? item.placeholder ?? item.name ?? item.campo,
        placeholder: item.placeholder,
      };
    });
  }

  if (typeof campo === "string") {
    return [{ ...DEFAULT_FIELD_CONFIG, name: campo, label: campo, placeholder: undefined }];
  }

  return [
    {
      ...DEFAULT_FIELD_CONFIG,
      ...campo,
      name: campo.name ?? campo.campo,
      label: campo.label ?? campo.placeholder ?? campo.name ?? campo.campo,
      placeholder: campo.placeholder,
    },
  ];
}

export default function Form({ campo, buttonText = "Criar Conta", onPrimaryAction }) {
  const fields = useMemo(() => normalizeCampo(campo), [campo]);
  const fileInputRefs = useRef({});

  const isFieldValueFilled = (value) => {
    if (value instanceof File) return true;
    return String(value ?? "").trim() !== "";
  };

  const hasPasswordAndConfirmation = useMemo(() => {
    const passwordFields = fields.filter((field) => field.type === "password");
    const hasConfirm = passwordFields.some((field) => isConfirmPasswordField(field));
    const hasMainPassword = passwordFields.some((field) => !isConfirmPasswordField(field));
    return hasConfirm && hasMainPassword;
  }, [fields]);

  const [showPassword, setShowPassword] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [fullscreenField, setFullscreenField] = useState(null);
  const [formData, setFormData] = useState(() =>
    fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: field.type === "file" || field.type === "video" ? null : "",
      }),
      {}
    )
  );

  const isFormComplete = fields.every((field) => {
    if (field.required === false) return true;
    return isFieldValueFilled(formData[field.name]);
  });

  const validationErrors = useMemo(() => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordFields = fields.filter((field) => field.type === "password");
    const mainPasswordField = passwordFields.find((field) => !isConfirmPasswordField(field));
    const confirmPasswordField = passwordFields.find((field) => isConfirmPasswordField(field));

    fields.forEach((field) => {
      const value = formData[field.name] ?? "";
      const textValue = typeof value === "string" ? value : "";

      if (field.type === "email" && textValue.trim() !== "" && !emailRegex.test(textValue.trim())) {
        errors[field.name] = "Email inválido";
      }

      if (field.type === "password" && textValue.length > 0 && textValue.length < 8) {
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

  const handleInputChange = ({ target }) => {
    const { name, value, files } = target;
    const nextValue = files && files.length > 0 ? files[0] : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));
  };

  const openVideoPicker = (fieldName, source) => {
    const refKey = `${fieldName}-${source}`;
    fileInputRefs.current[refKey]?.click();
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

  const handlePrimaryClick = () => {
    if (!isFormValid || !onPrimaryAction) return;
    onPrimaryAction(formData);
  };

  return (
    <form className={styles.form}>
      {fields.map((field) => {
        const isVideoField = field.type === "video";
        const isTextareaField = field.type === "textarea";
        const isPasswordField = field.type === "password";
        const isConfirmField = isPasswordField && isConfirmPasswordField(field);
        const shouldShowEye = isPasswordField && (!hasPasswordAndConfirmation || !isConfirmField);
        const fieldType = isPasswordField && showPassword ? "text" : field.type;
        const fieldAutoComplete = field.autoComplete ?? (field.type === "password" ? "new-password" : "off");
        const isEmailFocused = field.type === "email" && focusedField === field.name;
        const isPasswordFocused = field.type === "password" && focusedField === field.name;
        const hasError = Boolean(
          validationErrors[field.name] && touchedFields[field.name] && !isEmailFocused && !isPasswordFocused
        );
        const inputClassName = hasError ? `${styles.input} ${styles.inputError}` : styles.input;

        if (isVideoField) {
          const selectedVideo = formData[field.name];
          const selectedVideoName = selectedVideo instanceof File ? selectedVideo.name : "Nenhum vídeo selecionado";

          return (
            <div key={field.name} className={styles.fieldWrap}>
              <div className={styles.videoField}>
                <span className={`${styles.floatingLabel} ${styles.floatingLabelActive}`}>{field.label}</span>

                <div className={styles.videoActions}>
                  {VIDEO_SOURCES.map((source) => (
                    <button
                      key={`${field.name}-${source.key}`}
                      type="button"
                      className={styles.videoButton}
                      onClick={() => openVideoPicker(field.name, source.key)}
                      aria-label={source.ariaLabel}
                    >
                      <span className={styles.videoButtonIcon} aria-hidden="true">
                        <IoCloudUploadOutline size={40} />
                      </span>
                      <span className={styles.videoButtonText}>{source.label}</span>
                    </button>
                  ))}
                </div>

                <p className={styles.videoFileName}>{selectedVideoName}</p>

                {VIDEO_SOURCES.map((source) => (
                  <input
                    key={`${field.name}-input-${source.key}`}
                    ref={(node) => {
                      fileInputRefs.current[`${field.name}-${source.key}`] = node;
                    }}
                    className={styles.hiddenInput}
                    type="file"
                    name={field.name}
                    accept={field.accept ?? "video/*"}
                    capture={source.key === "camera" ? field.capture ?? "environment" : undefined}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                ))}
              </div>
            </div>
          );
        }

        if (isPasswordField) {
          return (
            <div key={field.name} className={styles.fieldWrap}>
              <div className={styles.passwordWrap}>
                <input
                  className={inputClassName}
                  type={fieldType}
                  name={field.name}
                  placeholder={field.placeholder}
                  autoComplete={fieldAutoComplete}
                  value={formData[field.name] ?? ""}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <span
                  className={`${styles.floatingLabel} ${styles.floatingLabelActive}`}
                  aria-hidden="true"
                >
                  {field.label}
                </span>
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

        if (isTextareaField) {
          const hasFullscreen = Boolean(field.fullscreen);
          const isFullscreen = hasFullscreen && fullscreenField === field.name;

          return (
            <div key={field.name} className={styles.fieldWrap}>
              <div className={`${styles.inputWrap} ${isFullscreen ? styles.inputWrapFullscreen : ""}`.trim()}>
                {hasFullscreen ? (
                  <button
                    type="button"
                    className={styles.fullscreenToggle}
                    onClick={() => setFullscreenField((current) => (current === field.name ? null : field.name))}
                    aria-label={isFullscreen ? "Sair do modo tela cheia" : "Expandir para tela cheia"}
                  >
                    {isFullscreen ? <IoContractOutline size={20} /> : <IoExpandOutline size={20} />}
                  </button>
                ) : null}
                <textarea
                  className={`${inputClassName} ${styles.textarea} ${isFullscreen ? styles.textareaFullscreen : ""}`.trim()}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] ?? ""}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  rows={field.rows ?? 5}
                />
                <span
                  className={`${styles.floatingLabel} ${styles.floatingLabelActive}`}
                  aria-hidden="true"
                >
                  {field.label}
                </span>
              </div>
              {hasError ? <p className={styles.errorText}>{validationErrors[field.name]}</p> : null}
            </div>
          );
        }

        return (
          <div key={field.name} className={styles.fieldWrap}>
            <div className={styles.inputWrap}>
              <input
                className={inputClassName}
                type={fieldType}
                name={field.name}
                placeholder={field.placeholder}
                autoComplete={fieldAutoComplete}
                value={formData[field.name] ?? ""}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <span
                className={`${styles.floatingLabel} ${styles.floatingLabelActive}`}
                aria-hidden="true"
              >
                {field.label}
              </span>
            </div>
            {hasError ? <p className={styles.errorText}>{validationErrors[field.name]}</p> : null}
          </div>
        );
      })}

      <button
        type="button"
        className={styles.primaryButton}
        disabled={!isFormValid}
        onClick={handlePrimaryClick}
      >
        {buttonText}
      </button>
    </form>
  );
}
export default function Button({
  backend,
  nome = "Botão",
  textColor,
  fontSize,
  fonteSize,
  fontWeight,
  fonteWeight,
  borderColor,
  height,
  width,
  icon,
  type = "button",
  className,
  ...props
}) {
  const resolvedBackground = backend ?? "#000000";
  const resolvedFontSize = fontSize ?? fonteSize ?? "clamp(0.87rem, 3.4vw, 1.5rem)";
  const resolvedFontWeight = fontWeight ?? fonteWeight ?? 700;
  const resolvedBorderColor = borderColor ?? "#000000";
  const resolvedHeight = height ?? "clamp(2.9rem, 6vw, 3.5rem)";
  const resolvedWidth = width ?? "90%";
  const resolvedTextColor = textColor ?? "#ffffff";

  return (
    <button
      type={type}
      className={className}
      style={{
        width: resolvedWidth,
        height: resolvedHeight,
        position: "relative",
        borderRadius: "clamp(5rem, 2.5vw, 5.1rem)",
        border: `1px solid ${resolvedBorderColor}`,
        background: resolvedBackground,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(0.5rem, 2vw, 0.75rem)",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(26, 35, 50, 0.05)",
        textDecoration: "none",
        color: resolvedTextColor,
        fontSize: resolvedFontSize,
        fontWeight: resolvedFontWeight,
      }}
      {...props}
    >
      {icon ? (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "clamp(0.9rem, 3vw, 1.25rem)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 0,
          }}
        >
          {icon}
        </span>
      ) : null}
      <span>{nome}</span>
    </button>
  );
}
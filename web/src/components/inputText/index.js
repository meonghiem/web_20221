export default function InputText({ children, inputStyle, idInput }) {
  return (
    <div style={inputStyle}>
      <label
        htmlFor={idInput}
        style={{
          color: "#004b8f",
          marginBottom: "-0.8rem",
          fontWeight: "300",
          fontSize: "1.25rem",
          marginTop: "-1rem",
        }}
      >
        <p>{children}</p>
      </label>
      <input
        type="text"
        id={idInput}
        style={{
          backgroundColor: "#F9FAFB",
          color: "#111827",
          fontSize: "0.875rem",
          lineHeight: "1.75rem",
          borderWidth: "2px ",
          borderColor: "#004B8F",
          display: "block",
          width: "80%",
          marginTop: "-0.5rem",
        }}
      />
    </div>
  );
}

export default function InputSelect({
  children,
  datas,
  idInput,
  inputStyle = undefined,
}) {
  return (
    <div style={inputStyle}>
      <label
        htmlFor={idInput}
        style={{
          color: "#004b8f",
          marginBottom: "-0.5rem",
          fontWeight: "300",
          fontSize: "1.25rem",
        }}
      >
        <p>{children}</p>
      </label>
      <select
        id={idInput}
        style={{
          backgroundColor: "#F9FAFB",
          color: "#111827",
          fontSize: "0.875rem",
          height: "2.2rem",
          borderWidth: "2px ",
          borderColor: "#004B8F",
          paddingLeft: "5px",
          display: "block",
          width: "80%",
          marginTop: "-0.5rem",
        }}
        defaultValue={0}
      >
        {datas.map((data, index) => {
          return (
            <option
              key={index}
              value={index}
              style={{
                paddingBottom: "2px",
                paddingTop: "2px",
                background: "white",
              }}
            >
              {data}
            </option>
          );
        })}
        {/* <option>MALE</option>
        <option value="FEMALE">FEMALE</option> */}
      </select>
    </div>
  );
}

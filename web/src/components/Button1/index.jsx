const Button = ({ children, buttonStyle, Function, typeButton = "button" }) => {
  return (
    <button
    onClick={Function}
    type = {typeButton}
      style={{
        // display: "inline-flex",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        alignItems: "center",
        width: "100%",
        background: "#004b8f",
        color: "white",
        textAlign: 'center',
        cursor: "pointer",
      }}

    //   className="inline-flex py-4 px-4 items-center w-full my-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] bg-Secondary"
    >
      {children}
    </button>
  );
};

export default Button;

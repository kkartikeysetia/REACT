const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        Weight: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="Square"
    >
      {/* hardcode nhi krna islye props */}

      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;

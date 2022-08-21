import { useState } from "react";

export default function State() {
  const [red, isRed] = useState(true);
  const changeColor = () => {
    isRed(!red);
  };

  return (
    <div>
      <h1
        onClick={changeColor}
        /*  style={red ? { color: "red" } : { color: "blue" }} */
        style={{ color: red ? "red" : "blue" }}
      >
        useState Example
      </h1>
    </div>
  );
}

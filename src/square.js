import { memo } from "react";

const Square = memo(({ input, onClick }) => {
  console.log("Square rerendered");

  return (
    <button
      className="square"
      style={{ width: "30px", height: "30px"}}
      onClick={onClick}
    >
      {input}
    </button>
  );
});

export default Square;

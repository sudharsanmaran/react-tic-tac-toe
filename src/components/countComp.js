const CountComp = ({ count, handleIncrement, handleDecrement }) => {
  console.log("count rerendered");

  return (
    <div>
      <button onClick={handleIncrement}> + </button>
      <h4>{count}</h4>
      <button onClick={handleDecrement}> - </button>
    </div>
  );
};

export default CountComp;

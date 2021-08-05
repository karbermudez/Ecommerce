import React, { useState } from "react";

const ItemCount = ({ numInicial, producto }) => {
  const [count, setCount] = useState(numInicial); // <-- valor inicial

  const increase = () => {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  };
  const decrease = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>{producto}</h1>
      <div onClick={() => decrease()}>-</div>
      <input type="number" id="number" value={count} />
      <div onClick={() => increase()}>+</div>
    </div>
  );
};

export default ItemCount;

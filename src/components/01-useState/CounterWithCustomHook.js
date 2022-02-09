import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with hook {counter}</h1>
      <hr></hr>
      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={() => decrement(2)}>
        -1
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;

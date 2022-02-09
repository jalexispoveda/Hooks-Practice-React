import React, { useState } from "react";
import "./counter.css";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter2 } = counter;
  return (
    <>
      <h1>Counter1 {counter.counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <h1>Counter3 {counter.counter3}</h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter2: counter2 + 1 })}
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;

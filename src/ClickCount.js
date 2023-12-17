import React, { useState, useEffect } from "react";

/*
There is stateless components and state components

Stateless == Functional 

It's great to use functional component every time!
*/

const ClickCount = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(counter === 5) {
      alert("You have clicked 5 times");
    }
  }, [counter]);

  return (
    <>
      <p>Clicked { counter }</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </>
  )
}

export default ClickCount;


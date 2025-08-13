import { useState } from "react";

const useCounter = (defaultCount: number = 0) => {
  const [count, setCount] = useState<number>(defaultCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount ? prevCount - 1 : 0));
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;

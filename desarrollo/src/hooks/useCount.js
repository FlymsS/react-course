import {useState} from 'react'

export default function useCount(value=0) {
  const [count, setCount] = useState(value);
  const max = 100;
  const min = 0;


  const increment = () => {
    if (count == max) return;
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count == min) return;
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return { count, increment, decrement, resetCount };
}

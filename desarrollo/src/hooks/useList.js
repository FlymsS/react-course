import { useState } from "react";

export default function useList (initialValue = []){
  const [value, setValue] = useState(initialValue);

  //Push new value to list
  const push = (newValue) => {
    setValue((oldValue) => [...oldValue, newValue]);
  };

  //Remove value from list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  //List is Empty? true/false
  const isEmpty = () => value.length === 0;

  const clear = () => setValue([]);

  const sort = () => {
    setValue((oldValue) => oldValue.sort());
  };

  const invest = () => {
    setValue((oldValue) => oldValue.reverse());
  };

  return { value, setValue, push, remove, isEmpty, clear };
};

import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      handleChange: event => {
        console.log(event.target.value)
        setValue(event.target.value);
      }
    }
  };
};
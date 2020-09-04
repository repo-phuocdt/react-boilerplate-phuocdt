import { useState } from 'Hooks/node_modules/react';

export const useInput = initialValue => {
  const [value, setValue ] = useState(initialValue);

  const resetValue = () => setValue('');

  const onChangeText = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  return {
    value,
    setValue,
    resetValue,
    bind: {
      value,
      onChange: onChangeText
    }
  };
};
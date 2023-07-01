import { useState, useEffect } from "react";

function useLocalStorage<Type>(
  storageKey: string,
  defaultValue: Type
): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(storageKey);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, setValue, storageKey]);

  return [value, setValue];
}

export default useLocalStorage;

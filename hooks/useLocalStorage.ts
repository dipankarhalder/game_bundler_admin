import { useState, useEffect } from "react";

type UseLocalStorage<T> = [T, (value: T) => void, () => void, () => T];

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
  };

  const clear = () => {
    setStoredValue(initialValue);
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  const getValue = (): T => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  };

  return [storedValue, setValue, clear, getValue];
};

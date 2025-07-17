import { useState, useCallback } from "react";

export const useToggle = (
  initialChecked: boolean = false
): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked);
  const toggle = useCallback(() => setChecked((checked) => !checked), []);
  return [checked, toggle];
};

import { useState, useEffect, useCallback } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);

  useEffect(() => {
    setWidthHeight([window.innerWidth, window.innerHeight]);
  }, []);

  const handleResize = useCallback(() => {
    setWidthHeight([window.innerWidth, window.innerHeight]);
  }, []);

  useEventListener(window, "resize", handleResize);

  return widthHeight;
};

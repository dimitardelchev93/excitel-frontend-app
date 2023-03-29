import { useState, useEffect } from 'react';

import { ROW_PRESS_DURATION } from '../constants';

export const useCountryRowHandler = (onLongPress: () => void, duration = ROW_PRESS_DURATION) => {
  const [longPressTimer, setLongPressTimer] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      onLongPress();
      setProgress(0);
    }
  }, [progress, onLongPress]);

  const handleMouseDown = () => {
    const timer = window.setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, duration / 100);

    setLongPressTimer(timer);
  };

  const handleMouseUp = () => {
    if (longPressTimer !== null) {
      window.clearInterval(longPressTimer);
      setLongPressTimer(null);
    }
    setProgress(0);
  };

  return { handleMouseDown, handleMouseUp, progress };
};

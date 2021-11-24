import { useState } from 'react';

const useFormSubmit = () => {
  const [isShowing, setIsShowing] = useState(true);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useFormSubmit;
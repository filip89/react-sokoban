import { useEffect, useState } from 'react';
import { Direction } from '../types/Direction';
import { keyInputs, KeyInput } from '../data/keyInputs';

/*
 * memorizes two inputs - primary and secondary
 * primary input determines the desired direction
 * pressed input becomes primary, if primary already exists it now becomes secondary
 * when primary input is unpressed then secondary, if exists, becomes primary
 * */
function useInputDirection(): Direction | undefined {
  const [primaryInput, setPrimaryInput] = useState<KeyInput>();
  const [secondaryInput, setSecondaryInput] = useState<KeyInput>();

  useEffect(() => {
    const keyDownHandler = ({ code }: KeyboardEvent): void => {
      if (primaryInput?.code === code || secondaryInput?.code === code) return;
      const keyInput = keyInputs.find((keyInput) => keyInput.code === code);
      if (!keyInput) return;
      if (primaryInput) {
        setSecondaryInput(primaryInput);
      }
      setPrimaryInput(keyInput);
    };

    const keyUpHandler = ({ code }: KeyboardEvent): void => {
      if (primaryInput?.code === code) {
        if (secondaryInput) {
          setPrimaryInput(secondaryInput);
          setSecondaryInput(undefined);
        } else {
          setPrimaryInput(undefined);
        }
      } else if (secondaryInput?.code === code) {
        setSecondaryInput(undefined);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [primaryInput, secondaryInput]);

  return primaryInput?.direction;
}

export default useInputDirection;

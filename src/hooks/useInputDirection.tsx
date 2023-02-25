import { useEffect, useState } from 'react';
import { Direction } from '../types/Direction';
import { keyInputs, KeyInput } from '../data/keyInputs';

/*
 * memorizes two inputs - primary and secondary
 * primary input determines the desired direction
 * pressed input becomes primary, if primary already existed it now becomes secondary
 * when primary input is unpressed then secondary, if exists, becomes primary
 * */
/*
 * could have used another useEffect (for primaryInput?.direction change) instead of onChange callback,
 * but it is better to handle all the event related updates inside the event handler at once
 * than to chain the useEffects
 * */
function useInputDirection(
  onChange: (direction?: Direction) => unknown,
): Direction | undefined {
  const [primaryInput, setPrimaryInput] = useState<KeyInput>();
  const [secondaryInput, setSecondaryInput] = useState<KeyInput>();

  useEffect(() => {
    const keyDownHandler = ({ code }: KeyboardEvent): void => {
      if (primaryInput?.code === code || secondaryInput?.code === code) return;
      const keyInput = keyInputs.find((keyInput) => keyInput.code === code);
      if (!keyInput) return;
      const newPrimaryInput = keyInput;
      let newSecondaryInput = secondaryInput;
      if (primaryInput) {
        newSecondaryInput = primaryInput;
      }
      setPrimaryInput(newPrimaryInput);
      setSecondaryInput(newSecondaryInput);
      onChange(newPrimaryInput?.direction);
    };

    const keyUpHandler = ({ code }: KeyboardEvent): void => {
      let newPrimaryInput = primaryInput;
      let newSecondaryInput = secondaryInput;
      if (primaryInput?.code === code) {
        if (secondaryInput) {
          newPrimaryInput = secondaryInput;
          newSecondaryInput = undefined;
        } else {
          newPrimaryInput = undefined;
        }
      } else if (secondaryInput?.code === code) {
        newSecondaryInput = undefined;
      }
      setPrimaryInput(newPrimaryInput);
      setSecondaryInput(newSecondaryInput);
      onChange(newPrimaryInput?.direction);
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [primaryInput, secondaryInput, onChange]);

  return primaryInput?.direction;
}

export default useInputDirection;

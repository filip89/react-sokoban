import { useEffect, useState } from 'react';
import { Direction } from '../../../../../../types/Direction';
import { KeyInput } from '../../../../../../configs/keyInputs';
import {
  getInputsOnKeyDown,
  getInputsOnKeyUp,
  KeyChangeInputsProducer,
} from './getInputsUtils';

/*
 * memorizes two inputs - primary and secondary
 * primary input determines the desired direction
 * pressed input becomes primary, if primary already existed it now becomes secondary
 * when primary input is unpressed then secondary, if exists, becomes primary
 * */
function useInputDirection(): Direction | undefined {
  const [primaryInput, setPrimaryInput] = useState<KeyInput>();
  const [secondaryInput, setSecondaryInput] = useState<KeyInput>();

  useEffect(() => {
    const keyChangeHandler = (
      code: KeyboardEvent['code'],
      strategy: KeyChangeInputsProducer,
    ) => {
      const [newPrimaryInput, newSecondaryInput] = strategy(
        code,
        primaryInput,
        secondaryInput,
      );
      setPrimaryInput(newPrimaryInput);
      setSecondaryInput(newSecondaryInput);
    };

    const keyDownHandler = ({ code }: KeyboardEvent): void => {
      keyChangeHandler(code, getInputsOnKeyDown);
    };

    const keyUpHandler = ({ code }: KeyboardEvent): void => {
      keyChangeHandler(code, getInputsOnKeyUp);
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

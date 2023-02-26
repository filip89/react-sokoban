import { KeyInput, keyInputs } from '../../data/keyInputs';

type Inputs = [KeyInput | undefined, KeyInput | undefined];

type KeyChangeInputsProducer = (
  keyCode: string,
  currentPrimary?: KeyInput,
  currentSecondary?: KeyInput,
) => Inputs;

const getInputsOnKeyDown: KeyChangeInputsProducer = (
  keyCode,
  currentPrimary,
  currentSecondary,
) => {
  const currentInputs: Inputs = [currentPrimary, currentSecondary];
  if (currentPrimary?.code === keyCode || currentSecondary?.code === keyCode)
    return currentInputs;
  const keyInput = keyInputs.find((keyInput) => keyInput.code === keyCode);
  if (!keyInput) return currentInputs;
  const newPrimaryInput = keyInput;
  let newSecondaryInput = currentSecondary;
  if (currentPrimary) {
    newSecondaryInput = currentPrimary;
  }

  return [newPrimaryInput, newSecondaryInput];
};

const getInputsOnKeyUp: KeyChangeInputsProducer = (
  keyCode,
  currentPrimary,
  currentSecondary,
) => {
  let newPrimaryInput = currentPrimary;
  let newSecondaryInput = currentSecondary;
  if (currentPrimary?.code === keyCode) {
    if (currentSecondary) {
      newPrimaryInput = currentSecondary;
      newSecondaryInput = undefined;
    } else {
      newPrimaryInput = undefined;
    }
  } else if (currentSecondary?.code === keyCode) {
    newSecondaryInput = undefined;
  }

  return [newPrimaryInput, newSecondaryInput];
};

export { getInputsOnKeyDown, getInputsOnKeyUp };

export type { KeyChangeInputsProducer };

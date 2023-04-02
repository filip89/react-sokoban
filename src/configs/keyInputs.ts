import { Direction } from '../types/Direction';

export type KeyInput = {
  code: string;
  direction: Direction;
};

export const keyInputs: KeyInput[] = [
  {
    code: 'ArrowLeft',
    direction: { x: -1, y: 0 },
  },
  {
    code: 'ArrowUp',
    direction: { x: 0, y: -1 },
  },
  {
    code: 'ArrowRight',
    direction: { x: 1, y: 0 },
  },
  {
    code: 'ArrowDown',
    direction: { x: 0, y: 1 },
  },
];

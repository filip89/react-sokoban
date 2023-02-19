import { Movement } from '../types/Movement';

export const movements: Movement[] = [
  {
    name: 'left',
    code: 'ArrowLeft',
    direction: [0, -1],
  },
  {
    name: 'up',
    code: 'ArrowUp',
    direction: [-1, 0],
  },
  {
    name: 'right',
    code: 'ArrowRight',
    direction: [0, 1],
  },
  {
    name: 'down',
    code: 'ArrowDown',
    direction: [1, 0],
  },
];

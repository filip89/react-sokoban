import { Direction } from './Direction';

type Movement = {
  name: 'left' | 'up' | 'right' | 'down';
  code: string;
  direction: Direction;
};

export type { Movement };

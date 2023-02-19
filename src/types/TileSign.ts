import { signs } from '../data/signs';

export type TileSign = (typeof signs)[keyof typeof signs];

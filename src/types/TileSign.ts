import { signs } from '../config/signs';

export type TileSign = (typeof signs)[keyof typeof signs];

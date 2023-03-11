import { MapScheme } from '../types/MapScheme';
import { signs } from '../data/signs';

const rows = 16;
const columns = 22;

export const emptyTemplate: MapScheme = (() =>
  Array(rows)
    .fill([])
    .map(() => Array(columns).fill(signs.floor)))();

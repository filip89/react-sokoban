import { MapScheme } from '../types/MapScheme';
import { signs } from '../data/signs';

const rows = 12;
const columns = 16;

export const emptyTemplate: MapScheme = (() =>
  Array(rows)
    .fill([])
    .map(() => Array(columns).fill(signs.floor)))();

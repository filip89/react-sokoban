import { MapScheme } from '../types/MapScheme';
import { signs } from '../data/signs';
import { Location } from '../types/Location';

export function extractPlayerMapLocation(map: MapScheme): Location {
  for (let row = 0; row < map.length; row++) {
    const playerColumn = map[row].findIndex((tile) => tile === signs.player);
    if (~playerColumn) {
      return { x: playerColumn, y: row };
    }
  }
  throw 'No player in map';
}

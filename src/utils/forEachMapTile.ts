import { MapScheme } from '../types/MapScheme';
import { Location } from '../types/Location';
import { TileSign } from '../types/TileSign';

export function forEachMapTile(
  map: MapScheme,
  callback: (location: Location, sign: TileSign) => unknown,
) {
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const sign = map[row][column];
      const location: Location = { x: column, y: row };
      callback(location, sign);
    }
  }
}

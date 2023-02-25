import { Location } from '../types/Location';
import { MapScheme } from '../types/MapScheme';
import { signs } from '../data/signs';
import { Box } from '../types/Box';

type ReturnValue = {
  player: Location;
  boxes: Box[];
  destinations: Location[];
};

export function extractLocationsFromMap(map: MapScheme): ReturnValue {
  let player: Location | undefined;
  const boxes: Box[] = [];
  const destinations: Location[] = [];
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      const sign = map[row][column];
      const location = { y: row, x: column };
      if (sign === signs.player) {
        player = location;
      } else if (sign === signs.box) {
        boxes.push(new Box(location));
      } else if (sign === signs.destination) {
        destinations.push(location);
      }
    }
  }
  if (!player) throw 'No player in map';
  return {
    player,
    boxes,
    destinations,
  };
}

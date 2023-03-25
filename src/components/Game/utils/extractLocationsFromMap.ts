import { Location } from '../../../types/Location';
import { MapScheme } from '../../../types/MapScheme';
import { signs } from '../../../data/signs';
import { Box } from '../../../types/Box';
import { forEachMapTile } from '../../../utils/forEachMapTile';

type ReturnValue = {
  player: Location;
  boxes: Box[];
  destinations: Location[];
};

export function extractLocationsFromMap(map: MapScheme): ReturnValue {
  let player: Location | undefined;
  const boxes: Box[] = [];
  const destinations: Location[] = [];
  forEachMapTile(map, (location, sign) => {
    if (sign === signs.player) {
      player = location;
    } else if (sign === signs.box) {
      boxes.push(new Box(location));
    } else if (sign === signs.destination) {
      destinations.push(location);
    }
  });
  if (!player) throw 'No player in map';
  return {
    player,
    boxes,
    destinations,
  };
}

import { MapScheme } from '../../../types/MapScheme';
import { signs } from '../../../data/signs';
import { forEachMapTile } from '../../../utils/forEachMapTile';

export function validateMap(map: MapScheme): boolean {
  const counts = getSignsCounts(map);

  if (counts.players !== 1) {
    mapErrorAlert('Map must have exactly one player');
    return false;
  }

  if (!counts.destinations) {
    mapErrorAlert('Destinations missing');
    return false;
  }

  if (counts.destinations !== counts.boxes) {
    mapErrorAlert('Destinations and boxes mismatch');
    return false;
  }

  return true;
}

function getSignsCounts(map: MapScheme) {
  const counts = {
    players: 0,
    destinations: 0,
    boxes: 0,
  };
  forEachMapTile(map, (location, sign) => {
    if (sign === signs.player) {
      counts.players++;
    } else if (sign === signs.destination) {
      counts.destinations++;
    } else if (sign === signs.box) {
      counts.boxes++;
    }
  });
  return counts;
}

const mapErrorAlert = (reason: string) => alert(`Invalid map: ${reason};`);

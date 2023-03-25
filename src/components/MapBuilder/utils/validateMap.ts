import { MapScheme } from '../../../types/MapScheme';
import { signs } from '../../../data/signs';
import { TileSign } from '../../../types/TileSign';

export function validateMap(map: MapScheme): boolean {
  const playerCount = countMapSign(map, signs.player);

  if (playerCount !== 1) {
    mapErrorAlert('Map must have exactly one player');
    return false;
  }

  const destinationCount = countMapSign(map, signs.destination);

  if (!destinationCount) {
    mapErrorAlert('Destinations missing');
    return false;
  }

  const boxCount = countMapSign(map, signs.box);

  if (destinationCount !== boxCount) {
    mapErrorAlert('Destinations and boxes mismatch');
    return false;
  }

  return true;
}

const mapErrorAlert = (reason: string) => alert(`Invalid map: ${reason};`);

function countMapSign(map: MapScheme, sign: TileSign) {
  return map.reduce<number>((fullCount, row) => {
    const rowDestinationCount = row.filter((item) => item === sign).length;
    return fullCount + rowDestinationCount;
  }, 0);
}

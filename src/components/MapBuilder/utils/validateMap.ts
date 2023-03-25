import { MapScheme } from '../../../types/MapScheme';
import { signs } from '../../../data/signs';
import { TileSign } from '../../../types/TileSign';

export function validateMap(map: MapScheme): boolean {
  const hasPlayer = !!map.find((row) => row.includes(signs.player));

  if (!hasPlayer) {
    mapErrorAlert('Player missing');
    return false;
  }

  const destinationCount = countMapSigns(map, signs.destination);

  if (!destinationCount) {
    mapErrorAlert('Destinations missing');
    return false;
  }

  const boxCount = countMapSigns(map, signs.box);

  if (destinationCount !== boxCount) {
    mapErrorAlert('Destinations and boxes mismatch');
    return false;
  }

  return true;
}

const mapErrorAlert = (reason: string) => alert(`Invalid map: ${reason};`);

function countMapSigns(map: MapScheme, sign: TileSign) {
  return map.reduce<number>((fullCount, row) => {
    const rowDestinationCount = row.filter((item) => item === sign).length;
    return fullCount + rowDestinationCount;
  }, 0);
}

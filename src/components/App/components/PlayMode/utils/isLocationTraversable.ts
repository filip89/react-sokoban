import { Location } from '../../../../../types/Location';
import { MapScheme } from '../../../../../types/MapScheme';
import { signs } from '../../../../../data/signs';
import { TileSign } from '../../../../../types/TileSign';

const nonTraversableSigns: TileSign[] = [signs.wall, signs.empty];

export function isLocationTraversable(map: MapScheme, location: Location) {
  const tileSign = map[location.y]?.[location.x];
  return tileSign && !nonTraversableSigns.includes(tileSign);
}

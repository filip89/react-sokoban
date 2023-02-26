import { Location } from '../../../types/Location';
import { Direction } from '../../../types/Direction';
import { MapScheme } from '../../../types/MapScheme';
import { getTargetLocation } from './getTargetLocation';
import { isLocationTraversable } from './isLocationTraversable';
import { map2 } from '../../../maps/map2';
import { boxAtLocation } from './boxAtLocation';
import { Box } from '../../../types/Box';

export function canMoveBox(
  map: MapScheme,
  boxLocation: Location,
  boxes: Box[],
  direction: Direction,
): boolean {
  const boxTargetLocation = getTargetLocation(boxLocation, direction);

  return (
    !isLocationTraversable(map2, boxTargetLocation) ||
    !!boxAtLocation(boxTargetLocation, boxes)
  );
}

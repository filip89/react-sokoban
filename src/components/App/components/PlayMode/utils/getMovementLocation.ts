import { MapScheme } from '../../../../../types/MapScheme';
import { Location } from '../../../../../types/Location';
import { Direction } from '../../../../../types/Direction';
import { isLocationTraversable } from './isLocationTraversable';

export function getMovementLocation(
  map: MapScheme,
  currentLocation: Location,
  direction: Direction,
): false | Location {
  const targetLocation = {
    y: currentLocation.y + direction.y,
    x: currentLocation.x + direction.x,
  };
  return isLocationTraversable(map, targetLocation) ? targetLocation : false;
}

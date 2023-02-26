import { Location } from '../../../types/Location';
import { Direction } from '../../../types/Direction';

export function getTargetLocation(
  currentLocation: Location,
  direction: Direction,
): Location {
  return {
    y: currentLocation.y + direction.y,
    x: currentLocation.x + direction.x,
  };
}

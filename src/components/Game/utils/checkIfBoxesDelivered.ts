import { Box } from '../../../types/Box';
import { Location } from '../../../types/Location';
import { isSameLocations } from './isSameLocations';

export function checkIfBoxesDelivered(
  boxes: Box[],
  destinations: Location[],
): boolean {
  return boxes.every((box) =>
    destinations.find((destination) =>
      isSameLocations(destination, box.location),
    ),
  );
}

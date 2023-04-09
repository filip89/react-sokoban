import { Box } from '../../../../../types/Box';
import { Location } from '../../../../../types/Location';
import { isSameLocation } from '../../../../../utils/isSameLocation';

export function checkIfBoxesDelivered(
  boxes: Box[],
  destinations: Location[],
): boolean {
  return boxes.every((box) =>
    destinations.find((destination) =>
      isSameLocation(destination, box.location),
    ),
  );
}

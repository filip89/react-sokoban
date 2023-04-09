import { Location } from '../../../../../types/Location';
import { Box } from '../../../../../types/Box';
import { isSameLocation } from '../../../../../utils/isSameLocation';

export function isAnyBoxAtLocation(location: Location, boxes: Box[]) {
  return boxes.find((box) => isSameLocation(box.location, location));
}

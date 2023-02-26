import { Location } from '../../../types/Location';
import { Box } from '../../../types/Box';
import { isSameLocations } from './isSameLocations';

export function boxAtLocation(location: Location, boxes: Box[]) {
  return boxes.find((box) => isSameLocations(box.location, location));
}

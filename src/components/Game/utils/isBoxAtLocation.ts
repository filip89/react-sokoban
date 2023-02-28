import { Location } from '../../../types/Location';
import { Box } from '../../../types/Box';
import { isSameLocation } from './isSameLocation';

export function isBoxAtLocation(location: Location, boxes: Box[]) {
  return boxes.find((box) => isSameLocation(box.location, location));
}

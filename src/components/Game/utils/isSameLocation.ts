import { Location } from '../../../types/Location';

export function isSameLocation(locationA: Location, locationB: Location) {
  return locationA.y === locationB.y && locationA.x === locationB.x;
}

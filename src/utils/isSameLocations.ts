import { Location } from '../types/Location';

export function isSameLocations(locationA: Location, locationB: Location) {
  return locationA.y === locationB.y && locationA.x === locationB.x;
}

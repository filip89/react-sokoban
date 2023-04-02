import { Location } from '../../../types/Location';

export function getSquareExtremePoints(
  randomPointA: Location,
  randomPointB: Location,
): [Location, Location] {
  const minimumPoint: Location = { x: 0, y: 0 };
  const maximumPoint: Location = { x: 0, y: 0 };
  if (randomPointA.y < randomPointB.y) {
    minimumPoint.y = randomPointA.y;
    maximumPoint.y = randomPointB.y;
  } else {
    minimumPoint.y = randomPointB.y;
    maximumPoint.y = randomPointA.y;
  }
  if (randomPointA.x < randomPointB.x) {
    minimumPoint.x = randomPointA.x;
    maximumPoint.x = randomPointB.x;
  } else {
    minimumPoint.x = randomPointB.x;
    maximumPoint.x = randomPointA.x;
  }
  return [minimumPoint, maximumPoint];
}

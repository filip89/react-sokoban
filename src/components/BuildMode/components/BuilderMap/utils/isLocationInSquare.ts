import { Location } from '../../../../../types/Location';
import { getSquareExtremePoints } from '../../../utils/getSquareExtremePoints';
import { isIndexInRange } from '../../../utils/isIndexInRange';

export function isLocationInSquare(
  point: Location,
  squarePointA: Location,
  squarePointB: Location,
) {
  const [minimumPoint, maximumPoint] = getSquareExtremePoints(
    squarePointA,
    squarePointB,
  );
  return (
    isIndexInRange(point.y, minimumPoint.y, maximumPoint.y) &&
    isIndexInRange(point.x, minimumPoint.x, maximumPoint.x)
  );
}

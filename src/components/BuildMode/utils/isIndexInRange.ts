export function isIndexInRange(
  index: number,
  rangeStart: number,
  rangeEnd: number,
) {
  return index >= rangeStart && index <= rangeEnd;
}
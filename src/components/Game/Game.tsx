import styles from './Game.module.scss';
import Map from '../Map/Map';
import { map2 } from '../../maps/map2';
import Player from '../Player/Player';
import { useMemo, useState } from 'react';
import useInputDirection from '../../hooks/useInputDirection';
import { Direction } from '../../types/Direction';
import { extractLocationsFromMap } from '../../utils/extractLocationsFromMap';
import Box from '../Box/Box';
import { boxAtLocation } from '../../utils/boxAtLocation';
import { getMovementLocation } from '../../utils/getMovementLocation';
import { isLocationTraversable } from '../../utils/isLocationTraversable';
import { isSameLocations } from '../../utils/isSameLocations';

function Game() {
  const {
    player: initialPlayer,
    boxes: initialBoxes,
    destinations,
  } = useMemo(() => extractLocationsFromMap(map2), []);
  const [player, setPlayer] = useState(initialPlayer);
  const [boxes, setBoxes] = useState(initialBoxes);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputDirection = useInputDirection(handleInputChange);

  const isSolved = useMemo(() => {
    return boxes.every((box) =>
      destinations.find((destination) =>
        isSameLocations(destination, box.location),
      ),
    );
  }, [destinations, boxes]);

  function handleInputChange(direction?: Direction) {
    if (isAnimating || !direction || isSolved) return;
    attemptMovement(direction);
  }

  function handleMovementEnd() {
    setIsAnimating(false);
    if (isSolved) {
      alert('Solved');
      return;
    }
    if (inputDirection) attemptMovement(inputDirection);
  }

  function attemptMovement(inputDirection: Direction) {
    const targetLocation = getMovementLocation(player, inputDirection);
    if (!isLocationTraversable(map2, targetLocation)) return;
    const boxToMove = boxAtLocation(targetLocation, boxes);
    if (boxToMove) {
      const boxTargetLocation = getMovementLocation(
        boxToMove.location,
        inputDirection,
      );
      if (
        !isLocationTraversable(map2, boxTargetLocation) ||
        boxAtLocation(boxTargetLocation, boxes)
      )
        return;

      setBoxes((boxes) =>
        boxes.map((box) => {
          if (box.id === boxToMove.id) {
            return { id: box.id, location: boxTargetLocation };
          }
          return box;
        }),
      );
    }
    setPlayer(targetLocation);
    setIsAnimating(true);
  }

  return (
    <div className={styles.container}>
      <Map scheme={map2} />
      <Player location={player} onMovementEnd={handleMovementEnd} />
      {boxes.map((box) => (
        <Box key={box.id} location={box.location} />
      ))}
    </div>
  );
}

export default Game;

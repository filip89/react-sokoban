import styles from './Game.module.scss';
import Map from '../Map/Map';
import { map2 } from '../../maps/map2';
import Player from '../Player/Player';
import { useEffect, useMemo, useState } from 'react';
import useInputDirection from '../../hooks/useInputDirection/useInputDirection';
import { extractLocationsFromMap } from './utils/extractLocationsFromMap';
import Box from '../Box/Box';
import { boxAtLocation } from './utils/boxAtLocation';
import { getTargetLocation } from './utils/getTargetLocation';
import { isLocationTraversable } from './utils/isLocationTraversable';
import { checkIfBoxesDelivered } from './utils/checkIfBoxesDelivered';
import { Direction } from '../../types/Direction';
import { Location } from '../../types/Location';

//TODO add locations state reducer

function Game() {
  const {
    player: initialPlayer,
    boxes: initialBoxes,
    destinations,
  } = useMemo(() => extractLocationsFromMap(map2), []);
  const [player, setPlayer] = useState(initialPlayer);
  const [boxes, setBoxes] = useState(initialBoxes);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputDirection = useInputDirection();

  const isSolved = useMemo(
    () => checkIfBoxesDelivered(boxes, destinations),
    [destinations, boxes],
  );

  useEffect(() => {
    attemptMovement();
  });

  function handleMovementEnd() {
    setIsAnimating(false);
    attemptMovement();
  }

  function attemptMovement() {
    if (!inputDirection || isSolved || isAnimating) return;
    const targetLocation = objectCanMove(player, inputDirection);
    if (!targetLocation) return;
    const boxToMove = boxAtLocation(targetLocation, boxes);
    if (boxToMove) {
      const boxTargetLocation = objectCanMove(
        boxToMove.location,
        inputDirection,
      );
      if (!boxTargetLocation || boxAtLocation(boxTargetLocation, boxes)) return;

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

  function objectCanMove(
    currentLocation: Location,
    direction: Direction,
  ): false | Location {
    const targetLocation = getTargetLocation(currentLocation, direction);
    return !isLocationTraversable(map2, targetLocation)
      ? false
      : targetLocation;
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

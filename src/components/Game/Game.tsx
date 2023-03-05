import styles from './Game.module.scss';
import Player from '../map-tiles/Player/Player';
import { useEffect, useMemo, useState } from 'react';
import useInputDirection from './hooks/useInputDirection/useInputDirection';
import { extractLocationsFromMap } from './utils/extractLocationsFromMap';
import Box from '../map-tiles/Box/Box';
import { isBoxAtLocation } from './utils/isBoxAtLocation';
import { checkIfBoxesDelivered } from './utils/checkIfBoxesDelivered';
import { MapScheme } from '../../types/MapScheme';
import { getMovementLocation } from './utils/getMovementLocation';
import Movable from '../Movable/Movable';
import PlayMap from '../PlayMap/PlayMap';

type Props = {
  map: MapScheme;
};

function Game({ map }: Props) {
  const {
    player: initialPlayer,
    boxes: initialBoxes,
    destinations,
  } = useMemo(() => extractLocationsFromMap(map), [map]);
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
    const movementLocation = getMovementLocation(map, player, inputDirection);
    if (!movementLocation) return;
    const box = isBoxAtLocation(movementLocation, boxes);
    if (box) {
      const boxMovementLocation = getMovementLocation(
        map,
        box.location,
        inputDirection,
      );
      if (!boxMovementLocation || isBoxAtLocation(boxMovementLocation, boxes))
        return;

      setBoxes((boxes) =>
        boxes.map((item) =>
          item.id === box.id
            ? { id: box.id, location: boxMovementLocation }
            : item,
        ),
      );
    }
    setPlayer(movementLocation);
    setIsAnimating(true);
  }

  return (
    <div className={styles.container}>
      <PlayMap scheme={map} />
      <Movable location={player} onMovementEnd={handleMovementEnd}>
        <Player zIndex={player.y} />
      </Movable>
      {boxes.map((box) => (
        <Movable key={box.id} location={box.location}>
          <Box zIndex={box.location.y} />
        </Movable>
      ))}
    </div>
  );
}

export default Game;

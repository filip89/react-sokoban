import styles from './Game.module.scss';
import Map from '../Map/Map';
import { map1 } from '../../maps/map1';
import Player from '../Player/Player';
import { useState } from 'react';
import { extractPlayerMapLocation } from '../../utils/extractPlayerMapLocation';
import useInputDirection from '../../hooks/useInputDirection';
import { Direction } from '../../types/Direction';

function Game() {
  const inputDirection = useInputDirection(handleInputChange);
  const [playerLocation, setPlayerLocation] = useState(() =>
    extractPlayerMapLocation(map1),
  );
  const [isAnimating, setIsAnimating] = useState(false);

  function handleInputChange(direction?: Direction) {
    if (isAnimating || !direction) return;
    attemptMovement(direction);
  }

  function handleMovementEnd() {
    setIsAnimating(false);
    if (inputDirection) attemptMovement(inputDirection);
  }

  function attemptMovement(inputDirection: Direction) {
    setPlayerLocation({
      x: playerLocation.x + inputDirection.x,
      y: playerLocation.y + inputDirection.y,
    });
    setIsAnimating(true);
  }

  return (
    <div className={styles.container}>
      <Map scheme={map1} />
      <Player location={playerLocation} onMovementEnd={handleMovementEnd} />
    </div>
  );
}

export default Game;

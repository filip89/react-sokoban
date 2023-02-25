import styles from './Game.module.scss';
import Map from '../Map/Map';
import { map1 } from '../../maps/map1';
import Player from '../Player/Player';
import { useEffect, useState } from 'react';
import { extractPlayerMapLocation } from '../../utils/extractPlayerMapLocation';
import useInputDirection from '../../hooks/useInputDirection';

function Game() {
  const inputDirection = useInputDirection();
  const [playerLocation, setPlayerLocation] = useState(() =>
    extractPlayerMapLocation(map1),
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    attemptMovement();
  });

  function attemptMovement() {
    if (isAnimating || !inputDirection) return;
    setPlayerLocation({
      x: playerLocation.x + inputDirection.x,
      y: playerLocation.y + inputDirection.y,
    });
    setIsAnimating(true);
  }

  function handleMovementEnd() {
    setIsAnimating(false);
    attemptMovement();
  }

  return (
    <div className={styles.container}>
      <Map scheme={map1} />
      <Player location={playerLocation} onMovementEnd={handleMovementEnd} />
    </div>
  );
}

export default Game;

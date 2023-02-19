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

  useEffect(() => {
    if (!inputDirection) return;
    const updateLocation = () => {
      setPlayerLocation((playerLocation) => ({
        x: playerLocation.x + inputDirection.x,
        y: playerLocation.y + inputDirection.y,
      }));
    };
    updateLocation();
    const interval = setInterval(updateLocation, 200);
    return () => clearInterval(interval);
  }, [inputDirection]);

  return (
    <div className={styles.container}>
      <Map scheme={map1} />
      <Player location={playerLocation} />
    </div>
  );
}

export default Game;

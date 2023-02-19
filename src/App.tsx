import Map from './components/Map/Map';
import { map1 } from './maps/map1';
import { useEffect, useState } from 'react';
import { extractPlayerMapLocation } from './utils/extractPlayerMapLocation';
import { movements } from './data/movements';

function App() {
  const [playerLocation, setPlayerLocation] = useState(() =>
    extractPlayerMapLocation(map1),
  );

  console.log(playerLocation);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const movement = movements.find(
        (movement) => movement.code === event.code,
      );
      if (movement && playerLocation) {
        setPlayerLocation((playerPos) => [
          playerPos[0] + movement.direction[0],
          playerPos[1] + movement.direction[1],
        ]);
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div>
      <Map scheme={map1} />
    </div>
  );
}

export default App;

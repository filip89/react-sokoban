import styles from './App.module.scss';
import MapBuilder from '../MapBuilder/MapBuilder';
import Game from '../Game/Game';
import React, { useMemo, useState } from 'react';
import { emptyTemplate } from '../../maps/emptyTemplate';
import { MapScheme } from '../../types/MapScheme';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { SavedMap } from '../../types/SavedMap';
import MapPicker from '../MapPicker/MapPicker';
import { map1 } from '../../maps/map1';
import { map2 } from '../../maps/map2';

const initialMaps = [map1, map2];

export type GameMode = 'edit' | 'play';

const App = () => {
  const [mode, setMode] = useState<GameMode>('play');
  const [maps, setMaps] = useState(initialMaps);
  const [gameResetKey, setGameResetKey] = useState(0);
  const [selectedMapId, setSelectedMapId] = useState<
    SavedMap['id'] | undefined
  >(initialMaps[0].id);

  function handleMapSave(scheme: MapScheme) {
    selectedMapId ? updateMap(scheme) : addMap(scheme);
  }

  function updateMap(scheme: MapScheme) {
    setMaps(
      produce((maps) => {
        const relevantMap = maps.find((map) => map.id === selectedMapId);
        relevantMap && (relevantMap.scheme = scheme);
      }),
    );
  }

  function addMap(scheme: MapScheme) {
    const newMap = createNewMap(scheme);
    setMaps((maps) => maps.concat(newMap));
    setSelectedMapId(newMap.id);
  }

  function handleModeChange() {
    setMode((mode) => (mode === 'play' ? 'edit' : 'play'));
  }

  function handleMapChange(mapId?: SavedMap['id']) {
    setSelectedMapId(mapId);
    setGameResetKey((key) => key + 1);
  }

  const currentMapScheme =
    useMemo(
      () => maps.find((map) => map.id === selectedMapId),
      [maps, selectedMapId],
    )?.scheme || emptyTemplate;

  return (
    <div className={styles.container}>
      <MapPicker
        selectedMapId={selectedMapId}
        maps={maps}
        mode={mode}
        onMapSelect={handleMapChange}
        onModeChange={handleModeChange}
      />
      {mode === 'edit' ? (
        <MapBuilder
          key={selectedMapId}
          map={currentMapScheme}
          onSave={handleMapSave}
        />
      ) : (
        selectedMapId && (
          <Game
            key={`${selectedMapId}_${gameResetKey}`}
            map={currentMapScheme}
          />
        )
      )}
    </div>
  );
};

export default App;

function createNewMap(scheme: MapScheme): SavedMap {
  return {
    id: uuidv4(),
    scheme,
  };
}

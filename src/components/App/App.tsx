import styles from './App.module.scss';
import MapBuilder from '../MapBuilder/MapBuilder';
import Game from '../Game/Game';
import { map2 } from '../../maps/map2';
import React, { useMemo, useState } from 'react';
import { map1 } from '../../maps/map1';
import { map3 } from '../../maps/map3';
import { emptyTemplate } from '../../maps/emptyTemplate';
import { MapScheme } from '../../types/MapScheme';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { SavedMap } from '../../types/SavedMap';
import MapPicker from '../MapPicker/MapPicker';

const initialMaps = [map1, map2, map3];

export type GameMode = 'edit' | 'play';

const App = () => {
  const [maps, setMaps] = useState(initialMaps);
  const [selectedMapId, setSelectedMapId] = useState<
    SavedMap['id'] | undefined
  >(initialMaps[0].id);
  const [mode, setMode] = useState<GameMode>('play');

  const currentMapScheme =
    useMemo(
      () => maps.find((map) => map.id === selectedMapId),
      [maps, selectedMapId],
    )?.scheme || emptyTemplate;

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

  return (
    <div className={styles.container}>
      <MapPicker
        selectedMapId={selectedMapId}
        maps={maps}
        onMapSelect={(mapId) => setSelectedMapId(mapId)}
        mode={mode}
        onModeChange={handleModeChange}
      />
      {mode === 'edit' ? (
        <MapBuilder
          key={selectedMapId}
          map={currentMapScheme}
          onSave={handleMapSave}
        />
      ) : (
        <Game key={selectedMapId} map={currentMapScheme} />
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

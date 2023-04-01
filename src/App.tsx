import styles from './App.module.scss';
import MapBuilder from './components/MapBuilder/MapBuilder';
import Game from './components/Game/Game';
import React, { useState } from 'react';
import { MapScheme } from './types/MapScheme';
import { SavedMap, SavedMapId } from './types/SavedMap';
import MapPicker from './components/MapPicker/MapPicker';
import { useMaps } from './hooks/useMaps';

export type GameMode = 'edit' | 'play';

const App = () => {
  const [mode, setMode] = useState<GameMode>('play');
  const [gameResetKey, setGameResetKey] = useState(0);
  const {
    maps,
    addMap,
    updateMap,
    selectedMapId,
    setSelectedMapId,
    currentMapScheme,
  } = useMaps();

  function handleModeChange() {
    setMode((mode) => (mode === 'play' ? 'edit' : 'play'));
  }

  function handleMapSave(scheme: MapScheme) {
    selectedMapId ? updateMap(scheme) : addMap(scheme);
  }

  function handleMapChange(mapId?: SavedMapId) {
    setSelectedMapId(mapId);
    setGameResetKey((key) => key + 1);
  }

  return (
    <div className={styles.container}>
      <MapPicker
        selectedMapId={selectedMapId}
        maps={maps}
        mode={mode}
        onMapSelect={handleMapChange}
        onModeChange={handleModeChange}
      />
      {mode === 'edit' && (
        <MapBuilder
          key={selectedMapId}
          map={currentMapScheme}
          onSave={handleMapSave}
        />
      )}
      {mode === 'play' && selectedMapId && (
        <Game key={`${selectedMapId}_${gameResetKey}`} map={currentMapScheme} />
      )}
    </div>
  );
};

export default App;

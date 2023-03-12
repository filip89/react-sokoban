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

const App = () => {
  const [maps, setMaps] = useState([map1, map2, map3]);
  const [selectedMapId, setSelectedMapId] = useState(map1.id);

  const currentMapScheme =
    useMemo(
      () => maps.find((map) => map.id === selectedMapId),
      [maps, selectedMapId],
    )?.scheme || emptyTemplate;

  function handleMapSave(scheme: MapScheme) {
    if (selectedMapId) {
      setMaps(
        produce((maps) => {
          const relevantMap = maps.find((map) => map.id === selectedMapId);
          relevantMap && (relevantMap.scheme = scheme);
        }),
      );
    } else {
      const newMap = createNewMap(scheme);
      setMaps((maps) => maps.concat(newMap));
      setSelectedMapId(newMap.id);
    }
  }

  return (
    <>
      <MapBuilder map={currentMapScheme} onSave={handleMapSave} />
      {/*<Game map={map2} />*/}
    </>
  );
};

export default App;

function createNewMap(scheme: MapScheme): SavedMap {
  return {
    id: uuidv4(),
    scheme,
  };
}

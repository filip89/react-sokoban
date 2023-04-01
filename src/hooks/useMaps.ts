import { useMemo, useState } from 'react';
import { SavedMap, SavedMapId } from '../types/SavedMap';
import { MapScheme } from '../types/MapScheme';
import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { map1 } from '../maps/map1';
import { map2 } from '../maps/map2';
import { emptyTemplate } from '../maps/emptyTemplate';

const initialMaps = [map1, map2];

export function useMaps() {
  const [maps, setMaps] = useState(initialMaps);
  const [selectedMapId, setSelectedMapId] = useState<SavedMapId | undefined>(
    initialMaps[0].id,
  );

  const currentMapScheme =
    useMemo(
      () => maps.find((map) => map.id === selectedMapId),
      [maps, selectedMapId],
    )?.scheme || emptyTemplate;

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

  return {
    maps,
    addMap,
    updateMap,
    selectedMapId,
    setSelectedMapId,
    currentMapScheme,
  };
}

function createNewMap(scheme: MapScheme): SavedMap {
  return {
    id: uuidv4(),
    scheme,
  };
}

import TilePicker from './components/TilePicker/TilePicker';
import { useState } from 'react';
import { TileSign } from '../../../../types/TileSign';
import BuilderMap from './components/BuilderMap/BuilderMap';
import { Location } from '../../../../types/Location';
import produce from 'immer';
import { getSquareExtremePoints } from './utils/getSquareExtremePoints';
import { isIndexInRange } from './utils/isIndexInRange';
import { MapScheme } from '../../../../types/MapScheme';
import GameModeLayout from '../../../shared/GameModeLayout/GameModeLayout';
import { validateMap } from './utils/validateMap';

type Props = {
  map: MapScheme;
  onSave: (mapScheme: MapScheme) => unknown;
};

const BuildMode = ({ map, onSave }: Props) => {
  const [pickedTile, setPickedTile] = useState<TileSign>('_');
  const [mapScheme, setMapScheme] = useState(map);

  function handleTilesPlacement(pointA: Location, pointB: Location) {
    const [minimumPoint, maximumPoint] = getSquareExtremePoints(pointA, pointB);
    setMapScheme(
      produce((scheme) => {
        scheme.forEach((row, rowIndex) => {
          if (!isIndexInRange(rowIndex, minimumPoint.y, maximumPoint.y)) return;
          row.forEach(
            (tile, tileIndex) =>
              isIndexInRange(tileIndex, minimumPoint.x, maximumPoint.x) &&
              (scheme[rowIndex][tileIndex] = pickedTile),
          );
        });
        return scheme;
      }),
    );
  }

  function handleReset() {
    setMapScheme(map);
  }

  function handleSave() {
    if (validateMap(mapScheme)) {
      onSave(mapScheme);
    }
  }

  return (
    <GameModeLayout
      mapSection={
        <BuilderMap
          scheme={mapScheme}
          buildTile={pickedTile}
          onTilesPlacement={handleTilesPlacement}
        />
      }
      footerSection={
        <TilePicker
          selectedTile={pickedTile}
          onTileSelect={setPickedTile}
          onReset={handleReset}
          onSave={handleSave}
        />
      }
    />
  );
};

export default BuildMode;

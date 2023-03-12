import styles from './MapBuilder.module.scss';
import TilePicker from './components/TilePicker/TilePicker';
import { useState } from 'react';
import { TileSign } from '../../types/TileSign';
import { emptyTemplate } from '../../maps/emptyTemplate';
import BuilderMap from './components/BuilderMap/BuilderMap';
import { Location } from '../../types/Location';
import produce from 'immer';
import { getSquareExtremePoints } from './utils/getSquareExtremePoints';
import { isIndexInRange } from './utils/isIndexInRange';

const MapBuilder = () => {
  const [pickedTile, setPickedTile] = useState<TileSign>('_');
  const [mapScheme, setMapScheme] = useState(emptyTemplate);

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

  return (
    <div className={styles.container}>
      <aside>
        <TilePicker selectedTile={pickedTile} onTileSelect={setPickedTile} />
      </aside>
      <main className={styles.map}>
        <BuilderMap
          scheme={mapScheme}
          buildTile={pickedTile}
          onTilesPlacement={handleTilesPlacement}
        />
      </main>
    </div>
  );
};

export default MapBuilder;

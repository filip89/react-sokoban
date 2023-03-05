import styles from './MapBuilder.module.scss';
import TilePicker from './TilePicker/TilePicker';
import { useState } from 'react';
import { TileSign } from '../../types/TileSign';
import { emptyTemplate } from '../../maps/emptyTemplate';
import BuildMap from '../BuildMap/BuildMap';

const MapBuilder = () => {
  const [selectedTile, setSelectedTile] = useState<TileSign>('_');
  const [mapScheme, setMapScheme] = useState(emptyTemplate);
  return (
    <div className={styles.container}>
      <aside>
        <TilePicker
          selectedTile={selectedTile}
          onTileSelect={setSelectedTile}
        />
      </aside>
      <main>{<BuildMap scheme={mapScheme} activeTile={selectedTile} />}</main>
    </div>
  );
};

export default MapBuilder;

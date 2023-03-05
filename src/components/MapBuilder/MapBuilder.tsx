import styles from './MapBuilder.module.scss';
import TilePicker from './TilePicker/TilePicker';
import { useState } from 'react';
import { TileSign } from '../../types/TileSign';

const MapBuilder = () => {
  const [selectedTile, setSelectedTile] = useState<TileSign>('_');
  return (
    <div className={styles.container}>
      <aside>
        <TilePicker
          selectedTile={selectedTile}
          onTileSelect={setSelectedTile}
        />
      </aside>
    </div>
  );
};

export default MapBuilder;

import styles from './MapPicker.module.scss';
import { SavedMap } from '../../types/SavedMap';
import { GameMode } from '../App/App';
import Button from '../Button/Button';
import PreviewMap from './PreviewMap/PreviewMap';
import { emptyTemplate } from '../../maps/emptyTemplate';

type Props = {
  maps: SavedMap[];
  onMapSelect: (mapId?: SavedMap['id']) => unknown;
  selectedMapId?: SavedMap['id'];
  mode: GameMode;
  onModeChange: () => unknown;
};

const MapPicker = ({
  maps,
  onMapSelect,
  selectedMapId,
  mode,
  onModeChange,
}: Props) => {
  function getMapItemClassName(mapId?: SavedMap['id']) {
    return `${styles.mapItem} ${
      mapId === selectedMapId ? styles['mapItem--selected'] : ''
    }`;
  }

  return (
    <header className={styles.container}>
      <div className={styles.modeButton}>
        <Button onClick={onModeChange}>
          {mode === 'edit' ? 'Play' : 'Edit'}
        </Button>
      </div>
      <ul className={styles.maps}>
        {maps.map((map) => (
          <li key={map.id} className={getMapItemClassName(map.id)}>
            <button
              className={styles.mapContainer}
              onClick={() => onMapSelect(map.id)}
            >
              <PreviewMap key={map.id} scheme={map.scheme} />
            </button>
          </li>
        ))}
        {mode === 'edit' && (
          <li className={getMapItemClassName()}>
            <button
              className={styles.mapContainer}
              onClick={() => onMapSelect()}
            >
              <PreviewMap scheme={emptyTemplate} />
              <div className={styles.newMapText}>New map</div>
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default MapPicker;

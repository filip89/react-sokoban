import styles from './MapPicker.module.scss';
import { SavedMap } from '../../types/SavedMap';
import { GameMode } from '../App/App';
import Button from '../Button/Button';

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
  function getMapClassName(mapId?: SavedMap['id']) {
    return `${styles.map} ${
      mapId === selectedMapId ? styles['map--selected'] : ''
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
          <li key={map.id} className={getMapClassName(map.id)}>
            <button
              className={styles.mapButton}
              onClick={() => onMapSelect(map.id)}
            >
              {map.id}
            </button>
          </li>
        ))}
        {mode === 'edit' && (
          <li className={getMapClassName()}>
            <button className={styles.mapButton} onClick={() => onMapSelect()}>
              New
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default MapPicker;

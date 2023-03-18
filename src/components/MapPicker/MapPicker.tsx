import styles from './MapPicker.module.scss';
import { SavedMap } from '../../types/SavedMap';
import { GameMode } from '../App/App';

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
      <button className={styles.modeButton} onClick={onModeChange}>
        {mode === 'edit' ? 'Play' : 'Edit'}
      </button>
      <ul className={styles.maps}>
        {mode === 'edit' && (
          <li className={getMapClassName()}>
            <button className={styles.mapButton} onClick={() => onMapSelect()}>
              New
            </button>
          </li>
        )}
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
      </ul>
    </header>
  );
};

export default MapPicker;

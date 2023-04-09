import styles from './MapPicker.module.scss';
import { SavedMap, SavedMapId } from '../../../../types/SavedMap';
import { GameMode } from '../../App';
import PreviewMap from './components/PreviewMap/PreviewMap';
import { emptyTemplate } from '../../../../data/maps/emptyTemplate';
import MapPickerItemSlot from './components/MapPickerItemSlot/MapPickerItemSlot';
import Button from '../../../shared/Button/Button';

type Props = {
  maps: SavedMap[];
  onMapSelect: (mapId?: SavedMapId) => unknown;
  selectedMapId?: SavedMapId;
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
  return (
    <header className={styles.container}>
      <Button onClick={onModeChange}>
        {mode === 'edit' ? 'Play' : 'Edit'}
      </Button>
      <ul className={styles.maps}>
        {maps.map((map) => (
          <MapPickerItemSlot
            key={map.id}
            isSelected={map.id === selectedMapId}
            onSelect={() => onMapSelect(map.id)}
          >
            <PreviewMap scheme={map.scheme} />
          </MapPickerItemSlot>
        ))}
        {mode === 'edit' && (
          <MapPickerItemSlot
            isSelected={!selectedMapId}
            onSelect={() => onMapSelect()}
          >
            <PreviewMap scheme={emptyTemplate} />
            <div className={styles.newMapText}>New map</div>
          </MapPickerItemSlot>
        )}
      </ul>
    </header>
  );
};

export default MapPicker;

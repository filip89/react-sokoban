import styles from './MapPickerItemSlot.module.scss';
import { PropsWithChildren } from 'react';

type Props = {
  isSelected: boolean;
  onSelect: () => unknown;
} & PropsWithChildren;

const MapPickerItemSlot = ({ children, isSelected, onSelect }: Props) => {
  function getMapItemClassName() {
    return `${styles.mapItem} ${isSelected ? styles['mapItem--selected'] : ''}`;
  }

  return (
    <li className={getMapItemClassName()}>
      <button className={styles.mapContainer} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default MapPickerItemSlot;

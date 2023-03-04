import styles from './MapTile.module.scss';
import { PropsWithChildren } from 'react';

export type MapTileProps = {
  zIndex?: number;
} & PropsWithChildren;

const MapTile = ({ children, zIndex }: MapTileProps) => {
  return (
    <div className={styles.container} style={{ zIndex }}>
      {children}
    </div>
  );
};

export default MapTile;

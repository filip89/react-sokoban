import styles from './MapTile.module.scss';
import { PropsWithChildren } from 'react';
import { sizeConfig } from '../../../configs/sizeConfig';

export type MapTileProps = {
  zIndex?: number;
  size?: string;
} & PropsWithChildren;

const MapTile = ({
  children,
  zIndex,
  size = sizeConfig.tileSize,
}: MapTileProps) => {
  return (
    <div
      className={styles.container}
      style={{ zIndex, width: size, height: size }}
    >
      {children}
    </div>
  );
};

export default MapTile;

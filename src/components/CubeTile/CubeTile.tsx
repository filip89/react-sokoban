import styles from './CubeTile.module.scss';
import MapTile, { MapTileProps } from '../MapTile/MapTile';

export type CubeTileProps = {
  color: string;
} & Pick<MapTileProps, 'zIndex' | 'size'>;

const CubeTile = ({ color, zIndex, size }: CubeTileProps) => {
  return (
    <MapTile zIndex={zIndex} size={size}>
      <div className={styles.top} style={{ color }} />
      <div className={styles.side} style={{ color }} />
    </MapTile>
  );
};

export default CubeTile;

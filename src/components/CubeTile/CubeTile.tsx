import styles from './CubeTile.module.scss';
import MapTile from '../MapTile/MapTile';

export type CubeTileProps = {
  color: string;
  zIndex?: number;
};

const CubeTile = ({ color, zIndex }: CubeTileProps) => {
  return (
    <MapTile zIndex={zIndex}>
      <div className={styles.top} style={{ color }} />
      <div className={styles.side} style={{ color }} />
    </MapTile>
  );
};

export default CubeTile;

import styles from './Floor.module.scss';
import MapTile, { MapTileProps } from '../../MapTile/MapTile';

const Floor = ({ size }: Pick<MapTileProps, 'size'>) => {
  return (
    <MapTile size={size}>
      <div className={styles.floor} />
    </MapTile>
  );
};

export default Floor;

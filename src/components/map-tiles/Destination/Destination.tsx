import styles from './Destination.module.scss';
import MapTile, { MapTileProps } from '../../MapTile/MapTile';

const Destination = ({ size }: Pick<MapTileProps, 'size'>) => {
  return (
    <MapTile size={size}>
      <div className={styles.destination} />
    </MapTile>
  );
};

export default Destination;

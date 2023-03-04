import styles from './Destination.module.scss';
import MapTile from '../../MapTile/MapTile';

const Destination = () => {
  return (
    <MapTile>
      <div className={styles.destination} />
    </MapTile>
  );
};

export default Destination;

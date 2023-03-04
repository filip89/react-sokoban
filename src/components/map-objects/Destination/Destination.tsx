import styles from './Destination.module.scss';
import MapObject from '../../MapObject/MapObject';

const Destination = () => {
  return (
    <MapObject>
      <div className={styles.destination} />
    </MapObject>
  );
};

export default Destination;

import styles from './Floor.module.scss';
import MapObject from '../../MapObject/MapObject';

const Floor = () => {
  return (
    <MapObject>
      <div className={styles.floor} />
    </MapObject>
  );
};

export default Floor;

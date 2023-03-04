import styles from './Wall.module.scss';
import MapObject from '../../MapObject/MapObject';

const Wall = () => {
  return (
    <MapObject>
      <div className={styles.wall} />
    </MapObject>
  );
};

export default Wall;

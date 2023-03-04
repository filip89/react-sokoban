import styles from './Floor.module.scss';
import MapTile from '../../MapTile/MapTile';

const Floor = () => {
  return (
    <MapTile>
      <div className={styles.floor} />
    </MapTile>
  );
};

export default Floor;

import styles from './TilePicker.module.scss';
import Floor from '../../map-tiles/Floor/Floor';
import Destination from '../../map-tiles/Destination/Destination';
import Wall from '../../map-tiles/Wall/Wall';
import Player from '../../map-tiles/Player/Player';
import Box from '../../map-tiles/Box/Box';

const TilePicker = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li className={styles.item} title="Floor">
          <Floor />
        </li>
        <li className={styles.item} title="Wall">
          <Wall />
        </li>
        <li className={styles.item} title="Destination">
          <Destination />
        </li>
        <li className={styles.item} title="Box">
          <Box />
        </li>
        <li className={styles.item} title="Player">
          <Player />
        </li>
      </ul>
    </div>
  );
};

export default TilePicker;

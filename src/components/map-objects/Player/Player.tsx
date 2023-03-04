import styles from './Player.module.scss';
import Movable, { MovableObjectProps } from '../../Movable/Movable';
import MapObject from '../../MapObject/MapObject';

const Player = ({ location, onMovementEnd }: MovableObjectProps) => {
  return (
    <Movable location={location} onMovementEnd={onMovementEnd}>
      <MapObject>
        <div className={styles.player} />
      </MapObject>
    </Movable>
  );
};

export default Player;

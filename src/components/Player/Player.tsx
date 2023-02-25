import styles from './Player.module.scss';
import MapObject from '../MapObject/MapObject';
import { Location } from '../../types/Location';

type Props = {
  location: Location;
  onMovementEnd: () => unknown;
};

const Player = ({ location, onMovementEnd }: Props) => {
  const cssDistance = getLocationCssDistance(location);
  return (
    <div
      className={styles.player}
      style={{ top: cssDistance.y, left: cssDistance.x }}
      onTransitionEnd={onMovementEnd}
    >
      <MapObject>@</MapObject>
    </div>
  );
};

export default Player;

function getLocationCssDistance(location: Location) {
  const stepSize = 40;
  return { x: location.x * stepSize, y: location.y * stepSize };
}

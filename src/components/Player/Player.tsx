import styles from './Player.module.scss';
import MapObject from '../MapObject/MapObject';
import { Location } from '../../types/Location';

type Props = {
  location: Location;
};

const Player = ({ location }: Props) => {
  const cssDistance = getLocationCssDistance(location);
  return (
    <div
      className={styles.player}
      style={{ top: cssDistance[0], left: cssDistance[1] }}
    >
      <MapObject>@</MapObject>
    </div>
  );
};

export default Player;

function getLocationCssDistance(location: Location) {
  const stepSize = 40;
  return [location[0] * stepSize, location[1] * stepSize];
}

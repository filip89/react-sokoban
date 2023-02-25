import styles from './MovableObject.module.scss';
import MapObject from '../MapObject/MapObject';
import { Location } from '../../types/Location';
import { PropsWithChildren } from 'react';

export type MovableObjectProps = {
  location: Location;
  onMovementEnd?: () => unknown;
} & PropsWithChildren;

const MovableObject = ({
  location,
  onMovementEnd,
  children,
}: MovableObjectProps) => {
  const cssDistance = getLocationCssDistance(location);
  return (
    <div
      className={styles.container}
      style={{ top: cssDistance.y, left: cssDistance.x }}
      onTransitionEnd={onMovementEnd}
    >
      <MapObject>{children}</MapObject>
    </div>
  );
};

function getLocationCssDistance(location: Location) {
  const stepSize = 40;
  return { x: location.x * stepSize, y: location.y * stepSize };
}

export default MovableObject;

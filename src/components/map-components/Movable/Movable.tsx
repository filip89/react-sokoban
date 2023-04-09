import styles from './Movable.module.scss';
import { Location } from '../../../types/Location';
import { PropsWithChildren } from 'react';
import { sizeConfig } from '../../../configs/sizeConfig';

export type MovableObjectProps = {
  location: Location;
  onMovementEnd?: () => unknown;
} & PropsWithChildren;

const Movable = ({ location, onMovementEnd, children }: MovableObjectProps) => {
  const cssDistance = getLocationCssDistance(location);
  return (
    <div
      className={styles.container}
      style={{ top: cssDistance.y, left: cssDistance.x }}
      onTransitionEnd={onMovementEnd}
    >
      {children}
    </div>
  );
};

function getLocationCssDistance(location: Location) {
  const stepSize = sizeConfig.tileSize;
  return { x: location.x * stepSize, y: location.y * stepSize };
}

export default Movable;

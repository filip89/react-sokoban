import styles from './Box.module.scss';
import Movable, { MovableObjectProps } from '../../Movable/Movable';
import MapObject from '../../MapObject/MapObject';

const Box = ({ location }: Pick<MovableObjectProps, 'location'>) => {
  return (
    <Movable location={location}>
      <MapObject>
        <div className={styles.box} />
      </MapObject>
    </Movable>
  );
};

export default Box;

import MovableObject, {
  MovableObjectProps,
} from '../MovableObject/MovableObject';
import { signs } from '../../data/signs';

const Box = ({ location }: Pick<MovableObjectProps, 'location'>) => {
  return <MovableObject location={location}>{signs.box}</MovableObject>;
};

export default Box;

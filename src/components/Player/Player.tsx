import MovableObject, {
  MovableObjectProps,
} from '../MovableObject/MovableObject';
import { signs } from '../../data/signs';

const Player = ({ location, onMovementEnd }: MovableObjectProps) => {
  return (
    <MovableObject location={location} onMovementEnd={onMovementEnd}>
      {signs.player}
    </MovableObject>
  );
};

export default Player;

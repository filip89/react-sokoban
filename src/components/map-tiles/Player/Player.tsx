import CubeTile, { CubeTileProps } from '../../CubeTile/CubeTile';

const Player = ({ zIndex, size }: Pick<CubeTileProps, 'zIndex' | 'size'>) => {
  return <CubeTile color="blue" zIndex={zIndex} size={size} />;
};

export default Player;

import CubeTile, { CubeTileProps } from '../../CubeTile/CubeTile';

const Wall = ({ zIndex, size }: Pick<CubeTileProps, 'zIndex' | 'size'>) => {
  return <CubeTile color="gray" zIndex={zIndex} size={size} />;
};

export default Wall;

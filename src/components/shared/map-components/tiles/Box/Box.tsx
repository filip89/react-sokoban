import CubeTile, { CubeTileProps } from '../../CubeTile/CubeTile';

const Box = ({ zIndex, size }: Pick<CubeTileProps, 'zIndex' | 'size'>) => {
  return <CubeTile color="#ffdc11" zIndex={zIndex} size={size} />;
};

export default Box;

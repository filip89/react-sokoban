import CubeTile from '../../CubeTile/CubeTile';

const Box = ({ zIndex }: { zIndex?: number }) => {
  return <CubeTile color="#ffdc11" zIndex={zIndex} />;
};

export default Box;

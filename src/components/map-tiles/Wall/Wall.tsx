import CubeTile from '../../CubeTile/CubeTile';

const Wall = ({ zIndex }: { zIndex?: number }) => {
  return <CubeTile color="gray" zIndex={zIndex} />;
};

export default Wall;

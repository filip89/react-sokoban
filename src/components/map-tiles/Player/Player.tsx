import CubeTile from '../../CubeTile/CubeTile';

const Player = ({ zIndex }: { zIndex?: number }) => {
  return <CubeTile color="blue" zIndex={zIndex} />;
};

export default Player;

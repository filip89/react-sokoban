import styles from './TilePicker.module.scss';
import Floor from '../../map-tiles/Floor/Floor';
import Destination from '../../map-tiles/Destination/Destination';
import Wall from '../../map-tiles/Wall/Wall';
import Player from '../../map-tiles/Player/Player';
import Box from '../../map-tiles/Box/Box';
import { TileSign } from '../../../types/TileSign';
import classNames from 'classnames';
import MapTile from '../../MapTile/MapTile';

type Props = {
  selectedTile: TileSign;
  onTileSelect: (sign: TileSign) => unknown;
};

const TilePicker = ({ selectedTile, onTileSelect }: Props) => {
  function getItemClassName(tile: TileSign) {
    return classNames(
      styles.item,
      tile === selectedTile && styles['item--selected'],
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li
          className={getItemClassName('_')}
          onClick={() => onTileSelect('_')}
          title="Floor"
        >
          <Floor />
        </li>
        <li
          className={getItemClassName('0')}
          onClick={() => onTileSelect('0')}
          title="Empty"
        >
          <MapTile />
        </li>
        <li
          className={getItemClassName('#')}
          onClick={() => onTileSelect('#')}
          title="Wall"
        >
          <Wall />
        </li>
        <li
          className={getItemClassName('*')}
          onClick={() => onTileSelect('*')}
          title="Destination"
        >
          <Destination />
        </li>
        <li
          className={getItemClassName('B')}
          onClick={() => onTileSelect('B')}
          title="Box"
        >
          <Box />
        </li>
        <li
          className={getItemClassName('@')}
          onClick={() => onTileSelect('@')}
          title="Player"
        >
          <Player />
        </li>
      </ul>
    </div>
  );
};

export default TilePicker;

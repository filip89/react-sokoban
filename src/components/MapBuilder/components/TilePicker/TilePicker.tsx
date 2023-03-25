import styles from './TilePicker.module.scss';
import Floor from '../../../map-tiles/Floor/Floor';
import Destination from '../../../map-tiles/Destination/Destination';
import Wall from '../../../map-tiles/Wall/Wall';
import Player from '../../../map-tiles/Player/Player';
import Box from '../../../map-tiles/Box/Box';
import { TileSign } from '../../../../types/TileSign';
import classNames from 'classnames';
import MapTile from '../../../MapTile/MapTile';
import { ReactElement } from 'react';
import { signs } from '../../../../data/signs';
import Button from '../../../Button/Button';

const tileItems: { sign: TileSign; label: string; component: ReactElement }[] =
  [
    { sign: signs.floor, label: 'Floor', component: <Floor /> },
    { sign: signs.empty, label: 'Empty', component: <MapTile /> },
    { sign: signs.player, label: 'Player', component: <Player /> },
    { sign: signs.wall, label: 'Wall', component: <Wall /> },
    { sign: signs.box, label: 'Box', component: <Box /> },
    {
      sign: signs.destination,
      label: 'Destination',
      component: <Destination />,
    },
  ];

type Props = {
  selectedTile: TileSign;
  onTileSelect: (sign: TileSign) => unknown;
  onReset: () => unknown;
  onSave: () => unknown;
};

const TilePicker = ({ selectedTile, onTileSelect, onReset, onSave }: Props) => {
  function getItemClassName(tile: TileSign) {
    return classNames(
      styles.item,
      tile === selectedTile && styles['item--selected'],
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
      <ul className={styles.items}>
        {tileItems.map((item) => (
          <li
            key={item.sign}
            className={getItemClassName(item.sign)}
            onClick={() => onTileSelect(item.sign)}
            title={item.label}
          >
            {item.component}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TilePicker;

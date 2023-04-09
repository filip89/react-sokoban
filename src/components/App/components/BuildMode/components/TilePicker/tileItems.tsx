import { TileSign } from '../../../../../../types/TileSign';
import { ReactElement } from 'react';
import { signs } from '../../../../../../data/signs';
import Floor from '../../../../../shared/map-components/tiles/Floor/Floor';
import MapTile from '../../../../../shared/map-components/MapTile/MapTile';
import Player from '../../../../../shared/map-components/tiles/Player/Player';
import Wall from '../../../../../shared/map-components/tiles/Wall/Wall';
import Box from '../../../../../shared/map-components/tiles/Box/Box';
import Destination from '../../../../../shared/map-components/tiles/Destination/Destination';

export const tileItems: {
  sign: TileSign;
  label: string;
  component: ReactElement;
}[] = [
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

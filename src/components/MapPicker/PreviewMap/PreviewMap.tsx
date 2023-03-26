import Map from '../../Map/Map';
import { TileSign } from '../../../types/TileSign';
import { Location } from '../../../types/Location';
import { signs } from '../../../data/signs';
import Wall from '../../map-tiles/Wall/Wall';
import Destination from '../../map-tiles/Destination/Destination';
import MapTile from '../../MapTile/MapTile';
import Floor from '../../map-tiles/Floor/Floor';
import React from 'react';
import { MapScheme } from '../../../types/MapScheme';
import Player from '../../map-tiles/Player/Player';
import Box from '../../map-tiles/Box/Box';
import { config } from '../../../data/config';

type Props = {
  scheme: MapScheme;
};

const PreviewMap = ({ scheme }: Props) => {
  return <Map scheme={scheme}>{getTileComponentBySign}</Map>;
};

export default PreviewMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  const tileSize = config.tilePreviewSize;
  if (sign === signs.wall) return <Wall zIndex={location.y} size={tileSize} />;
  if (sign === signs.destination) return <Destination size={tileSize} />;
  if (sign === signs.box) return <Box size={tileSize} />;
  if (sign === signs.empty) return <MapTile size={tileSize} />;
  if (sign === signs.player) return <Player size={tileSize} />;
  return <Floor size={tileSize} />;
}

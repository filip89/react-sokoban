import Map from '../../../map-components/Map/Map';
import { TileSign } from '../../../../types/TileSign';
import { Location } from '../../../../types/Location';
import { signs } from '../../../../data/signs';
import Wall from '../../../map-components/tiles/Wall/Wall';
import Destination from '../../../map-components/tiles/Destination/Destination';
import MapTile from '../../../map-components/MapTile/MapTile';
import Floor from '../../../map-components/tiles/Floor/Floor';
import React from 'react';
import Player from '../../../map-components/tiles/Player/Player';
import Box from '../../../map-components/tiles/Box/Box';
import { sizeConfig } from '../../../../configs/sizeConfig';
import { MapScheme } from '../../../../types/MapScheme';

type Props = {
  scheme: MapScheme;
};

const PreviewMap = ({ scheme }: Props) => {
  return <Map scheme={scheme}>{getTileComponentBySign}</Map>;
};

export default PreviewMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  const tileSize = sizeConfig.tilePreviewSize;
  if (sign === signs.wall) return <Wall zIndex={location.y} size={tileSize} />;
  if (sign === signs.destination) return <Destination size={tileSize} />;
  if (sign === signs.box) return <Box size={tileSize} />;
  if (sign === signs.empty) return <MapTile size={tileSize} />;
  if (sign === signs.player) return <Player size={tileSize} />;
  return <Floor size={tileSize} />;
}

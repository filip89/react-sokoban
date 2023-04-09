import Map, { MapProps } from '../../../../../shared/map-components/Map/Map';
import { TileSign } from '../../../../../../types/TileSign';
import { signs } from '../../../../../../data/signs';
import Wall from '../../../../../shared/map-components/tiles/Wall/Wall';
import Destination from '../../../../../shared/map-components/tiles/Destination/Destination';
import MapTile from '../../../../../shared/map-components/MapTile/MapTile';
import Floor from '../../../../../shared/map-components/tiles/Floor/Floor';
import React from 'react';
import { Location } from '../../../../../../types/Location';

type Props = Pick<MapProps, 'scheme'>;

const PlayMap = ({ scheme }: Props) => {
  return <Map scheme={scheme}>{getTileComponentBySign}</Map>;
};

export default PlayMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  if (sign === signs.wall) return <Wall zIndex={location.y} />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.empty) return <MapTile />;
  return <Floor />;
}

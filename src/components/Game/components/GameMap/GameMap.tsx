import Map, { MapProps } from '../../../Map/Map';
import { TileSign } from '../../../../types/TileSign';
import { signs } from '../../../../data/signs';
import Wall from '../../../map-tiles/Wall/Wall';
import Destination from '../../../map-tiles/Destination/Destination';
import MapTile from '../../../MapTile/MapTile';
import Floor from '../../../map-tiles/Floor/Floor';
import React from 'react';
import { Location } from '../../../../types/Location';

type Props = Pick<MapProps, 'scheme'>;

const GameMap = ({ scheme }: Props) => {
  return <Map scheme={scheme}>{getTileComponentBySign}</Map>;
};

export default GameMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  if (sign === signs.wall) return <Wall zIndex={location.y} />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.empty) return <MapTile />;
  return <Floor />;
}

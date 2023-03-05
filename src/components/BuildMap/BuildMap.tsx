import Map, { MapProps } from '../Map/Map';
import { TileSign } from '../../types/TileSign';
import { signs } from '../../data/signs';
import Wall from '../map-tiles/Wall/Wall';
import Destination from '../map-tiles/Destination/Destination';
import MapTile from '../MapTile/MapTile';
import Floor from '../map-tiles/Floor/Floor';
import React, { useState } from 'react';
import Player from '../map-tiles/Player/Player';
import Box from '../map-tiles/Box/Box';
import { Location } from '../../types/Location';
import { isSameLocation } from '../Game/utils/isSameLocation';

type Props = {
  activeTile: TileSign;
} & Pick<MapProps, 'scheme'>;

const BuildMap = ({ scheme, activeTile }: Props) => {
  const [hoveredLocation, setHoveredLocation] = useState<Location>();
  const [anchorPoint, setAnchorPoint] = useState<Location>();

  function handleMouseDown(location: Location) {
    setAnchorPoint(location);
  }

  function handleMouseUp(location: Location) {
    console.log(anchorPoint, location);
    setAnchorPoint(undefined);
  }

  function renderTile(tile: TileSign, location: Location) {
    let relevantSign = tile;
    if (hoveredLocation) {
      if (isSameLocation(hoveredLocation, location)) {
        relevantSign = activeTile;
      }
      if (
        anchorPoint &&
        isLocationInSquare(location, anchorPoint, hoveredLocation)
      ) {
        relevantSign = activeTile;
      }
    }

    return getTileComponentBySign(relevantSign, location);
  }

  return (
    <Map
      scheme={scheme}
      onMouseOverTile={(location) => setHoveredLocation(location)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {renderTile}
    </Map>
  );
};

export default BuildMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  if (sign === signs.floor) return <Floor />;
  if (sign === signs.wall) return <Wall zIndex={location.y} />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.box) return <Box zIndex={location.y} />;
  if (sign === signs.player) return <Player zIndex={location.y} />;
  return <MapTile />;
}

function isLocationInSquare(
  point: Location,
  squarePointA: Location,
  squarePointB: Location,
) {
  const isBetweenColumns =
    (point.y >= squarePointA.y && point.y <= squarePointB.y) ||
    (point.y <= squarePointA.y && point.y >= squarePointB.y);
  const isBetweenRows =
    (point.x >= squarePointA.x && point.x <= squarePointB.x) ||
    (point.x <= squarePointA.x && point.x >= squarePointB.x);
  return isBetweenColumns && isBetweenRows;
}

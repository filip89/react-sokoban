import Map, { MapProps } from '../../../Map/Map';
import { TileSign } from '../../../../types/TileSign';
import { signs } from '../../../../data/signs';
import Wall from '../../../map-tiles/Wall/Wall';
import Destination from '../../../map-tiles/Destination/Destination';
import MapTile from '../../../MapTile/MapTile';
import Floor from '../../../map-tiles/Floor/Floor';
import React, { useState } from 'react';
import Player from '../../../map-tiles/Player/Player';
import Box from '../../../map-tiles/Box/Box';
import { Location } from '../../../../types/Location';
import { isSameLocation } from '../../../../utils/isSameLocation';
import { isLocationInSquare } from './utils/isLocationInSquare';

type Props = {
  buildTile: TileSign;
  onTilesPlacement: (pointA: Location, pointB: Location) => unknown;
} & Pick<MapProps, 'scheme'>;

const BuilderMap = ({ scheme, buildTile, onTilesPlacement }: Props) => {
  const [hoveredLocation, setHoveredLocation] = useState<Location>();
  const [anchorPoint, setAnchorPoint] = useState<Location>();

  function handleMouseDown(location: Location) {
    setAnchorPoint(location);
  }

  function handleMouseUp(location: Location) {
    if (!anchorPoint) return;
    onTilesPlacement(anchorPoint, location);
    setAnchorPoint(undefined);
  }

  function handleRightMouseDown() {
    setAnchorPoint(undefined);
  }

  function renderTile(tile: TileSign, location: Location) {
    let relevantSign = tile;
    if (
      hoveredLocation &&
      (isSameLocation(hoveredLocation, location) ||
        (anchorPoint &&
          isLocationInSquare(location, anchorPoint, hoveredLocation)))
    ) {
      relevantSign = buildTile;
    }

    return getTileComponentBySign(relevantSign, location);
  }

  return (
    <div onContextMenu={(ev) => ev.preventDefault()}>
      <Map
        scheme={scheme}
        onMouseOverTile={(location) => setHoveredLocation(location)}
        onMouseDown={handleMouseDown}
        onRightMouseDown={handleRightMouseDown}
        onMouseUp={handleMouseUp}
      >
        {renderTile}
      </Map>
    </div>
  );
};

export default BuilderMap;

function getTileComponentBySign(sign: TileSign, location: Location) {
  if (sign === signs.floor) return <Floor />;
  if (sign === signs.wall) return <Wall zIndex={location.y} />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.box) return <Box zIndex={location.y} />;
  if (sign === signs.player) return <Player zIndex={location.y} />;
  return <MapTile />;
}

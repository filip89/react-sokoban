import styles from './Map.module.scss';
import { MapScheme } from '../../types/MapScheme';
import MapTile from '../MapTile/MapTile';
import { TileSign } from '../../types/TileSign';
import { signs } from '../../data/signs';
import Floor from '../map-tiles/Floor/Floor';
import Destination from '../map-tiles/Destination/Destination';
import Wall from '../map-tiles/Wall/Wall';
import React from 'react';

type Props = {
  scheme: MapScheme;
};

const Map = ({ scheme }: Props) => {
  return (
    <div className={styles.map}>
      {scheme.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((tile, columnIndex) => (
            <React.Fragment key={columnIndex}>
              {getTileComponentBySign(tile, rowIndex)}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;

function getTileComponentBySign(sign: TileSign, zIndex: number) {
  if (sign === signs.wall) return <Wall zIndex={zIndex} />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.empty) return <MapTile />;
  return <Floor />;
}

import styles from './Map.module.scss';
import { MapScheme } from '../../types/MapScheme';
import MapObject from '../MapObject/MapObject';
import { TileSign } from '../../types/TileSign';
import { signs } from '../../data/signs';
import Floor from '../map-objects/Floor/Floor';
import Destination from '../map-objects/Destination/Destination';
import Wall from '../map-objects/Wall/Wall';
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
              {getTileComponentBySign(tile)}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;

function getTileComponentBySign(sign: TileSign) {
  if (sign === signs.wall) return <Wall />;
  if (sign === signs.destination) return <Destination />;
  if (sign === signs.empty) return <MapObject />;
  return <Floor />;
}

import styles from './Map.module.scss';
import { MapScheme } from '../../types/MapScheme';
import { PropsWithChildren } from 'react';
import MapObject from '../MapObject/MapObject';
import { TileSign } from '../../types/TileSign';
import { signs } from '../../data/signs';

type Props = {
  scheme: MapScheme;
} & PropsWithChildren;

const Map = ({ scheme, children }: Props) => {
  return (
    <div className={styles.map}>
      {scheme.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((tile, columnIndex) => (
            <MapObject key={columnIndex}>
              {getTileComponentBySign(tile)}
            </MapObject>
          ))}
        </div>
      ))}
      {children}
    </div>
  );
};

export default Map;

function getTileComponentBySign(sign: TileSign) {
  if (sign === signs.wall) return signs.wall;
  if (sign === signs.destination) return signs.destination;
  return '';
}

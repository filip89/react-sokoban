import styles from './Map.module.scss';
import { MapScheme } from '../../types/MapScheme';
import { TileSign } from '../../types/TileSign';
import React, { ReactNode } from 'react';
import { Location } from '../../types/Location';

export type MapProps = {
  scheme: MapScheme;
  children: (sign: TileSign, location: Location) => ReactNode;
  onMouseOverTile?: (location: Location) => unknown;
  onMouseDown?: (location: Location) => unknown;
  onMouseUp?: (location: Location) => unknown;
};

const Map = ({
  scheme,
  children: tileRender,
  onMouseOverTile,
  onMouseDown,
  onMouseUp,
}: MapProps) => {
  return (
    <div className={styles.map}>
      {scheme.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((tile, columnIndex) => {
            const location: Location = { x: columnIndex, y: rowIndex };
            return (
              <div
                draggable={false}
                key={`${columnIndex}-${rowIndex}`}
                onMouseOver={() => onMouseOverTile?.(location)}
                onMouseDown={() => onMouseDown?.(location)}
                onMouseUp={() => onMouseUp?.(location)}
              >
                <React.Fragment key={columnIndex}>
                  {tileRender(tile, location)}
                </React.Fragment>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Map;

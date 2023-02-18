import styles from './Map.module.scss';
import { MapScheme } from '../../types/MapScheme';

type Props = {
  scheme: MapScheme;
};

const Map = ({ scheme }: Props) => {
  return (
    <div className={styles.map}>
      {scheme.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((tile, columnIndex) => (
            <div key={columnIndex} className={styles.tile}>
              {tile}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;

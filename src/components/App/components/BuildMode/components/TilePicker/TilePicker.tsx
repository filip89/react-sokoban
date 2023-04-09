import styles from './TilePicker.module.scss';
import { TileSign } from '../../../../../../types/TileSign';
import classNames from 'classnames';
import { tileItems } from './tileItems';
import Button from '../../../../../shared/Button/Button';

type Props = {
  selectedTile: TileSign;
  onTileSelect: (sign: TileSign) => unknown;
  onReset: () => unknown;
  onSave: () => unknown;
};

const TilePicker = ({ selectedTile, onTileSelect, onReset, onSave }: Props) => {
  function getItemClassName(tile: TileSign) {
    return classNames(
      styles.item,
      tile === selectedTile && styles['item--selected'],
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Button onClick={onSave}>Save</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
      <ul className={styles.items}>
        {tileItems.map((item) => (
          <li
            key={item.sign}
            className={getItemClassName(item.sign)}
            onClick={() => onTileSelect(item.sign)}
            title={item.label}
          >
            {item.component}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TilePicker;

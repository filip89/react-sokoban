import styles from './MapBuilder.module.scss';
import TilePicker from './TilePicker/TilePicker';

const MapBuilder = () => {
  return (
    <div className={styles.container}>
      <aside>
        <TilePicker />
      </aside>
    </div>
  );
};

export default MapBuilder;

import styles from './GameModeLayout.module.scss';

type Props = {
  mapSection: JSX.Element;
  footerSection?: JSX.Element;
};

const GameModeLayout = ({ footerSection, mapSection }: Props) => {
  return (
    <div className={styles.container}>
      <main className={styles.map}>{mapSection}</main>
      <footer>{footerSection}</footer>
    </div>
  );
};

export default GameModeLayout;

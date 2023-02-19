import styles from './MapObject.module.scss';
import { PropsWithChildren } from 'react';

const MapObject = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default MapObject;

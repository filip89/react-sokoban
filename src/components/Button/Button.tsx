import styles from './Button.module.scss';
import { PropsWithChildren } from 'react';

type Props = {
  onClick: () => unknown;
} & PropsWithChildren;

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;

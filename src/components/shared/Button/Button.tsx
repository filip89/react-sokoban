import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;

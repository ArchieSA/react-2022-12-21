import styles from './styles.module.css';
import classnames from 'classnames';
import { Size } from '../../constants/ui';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ButtonViewVariant = {
  prime: 'prime',
  second: 'second',
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = Size.m,
  viewVariant = ButtonViewVariant.second,
}) => {
  return (
    <button
      className={classnames(
        styles.root,
        className,
        styles[size],
        styles[viewVariant]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

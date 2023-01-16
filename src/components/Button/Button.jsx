import classnames from 'classnames';

import { Size } from '../../constants/ui';

import styles from './styles.module.css';

export const ButtonViewVariant = {
  prime: 'prime',
  second: 'second',
  navigation: 'navigation',
  navigationActive: 'navigation_active',
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

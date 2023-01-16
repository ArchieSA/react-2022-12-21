import { Button, ButtonViewVariant } from '../Button/Button';

import { Size } from '../../constants/ui';

export const Tab = ({ title, onClick, isActive, className }) => {
  return (
    <Button
      onClick={onClick}
      size={Size.l}
      viewVariant={
        isActive ? ButtonViewVariant.navigationActive : ButtonViewVariant.navigation
      }
      className={className}
    >
      {title}
    </Button>
  );
};

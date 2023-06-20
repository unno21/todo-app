import React, { FC, ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

import './index.scss'; 
import { Variant, Size } from '../../utils/types';

interface Props {
  variant?: `${Variant}`;
  size?: `${Size}`;
  children: ReactNode
}

const className = BEMHelper('button');

const Button: FC<Props> = (props) => {
  const { 
    variant = Variant.Primary, 
    size = Size.Small, 
    children
  } = props;
  return (
    <button
      type="button"
      {...className('', [variant, size])}
    >
      {children}
    </button>
  );

};

export default Button;
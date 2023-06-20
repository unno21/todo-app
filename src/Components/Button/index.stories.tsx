import React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'test',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const CustomChildren = {
  args: {
    size: 'large',
    children: <h3>Sample h3</h3>,
  },
};

import { ReactNode } from 'react';

export default interface Base {
  children?: ReactNode;
  className?: string;
}

export enum SIZE_ENUM {
  XS = 'xsm',
  SM = 'SM',
  MD = 'md',
  LG = 'lg',
  XL = 'xlg',
}

export enum COLOR_ENUM {
  TEXT = 'text',
  TEXT_INVERT = 'text_invert',
  TEXT_ERROR = 'text_error',
  TEXT_WARN = 'text_warn',
}

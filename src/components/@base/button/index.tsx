import React from 'react';

import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/button/type';


export default function Button({ className, children, ...props }: Props) {
  return (
    <button className={cn('p-4 bg-blue-400 text-white rounded w-full', className)} {...props}>
      {children}
    </button>
  );
}

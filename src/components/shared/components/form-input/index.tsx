import React from 'react';

import cn from '@/lib/clsxm';

import { Props } from '@/components/shared/components/form-input/type';

export default function FormInput({ field, error, className, form, ...props }: Props) {
  return <>
    {error && <p className='text-red-700 text-xs'>{error}</p>}
    <input
      className={cn('bg-gray-100 rounded p-4 w-[350px]', error && 'border border-red-700', className)}
      placeholder={field?.name} {...field} {...props} />
  </>;
}
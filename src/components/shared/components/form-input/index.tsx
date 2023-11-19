import { FieldAttributes } from 'formik/dist/Field';
import React from 'react';

import cn from '@/lib/clsxm';

export default function FormInput({ field, error, className, form, placeholder, ...props }: {
  field: FieldAttributes<any>
}) {
  return <>
    {error && <p className='text-red-700 text-xs'>{error}</p>}
    <input
      className={cn('bg-gray-100 rounded p-4 w-[350px]', error && 'border border-red-700', className)}
      placeholder={field?.name} {...field} {...props} />
  </>;
}
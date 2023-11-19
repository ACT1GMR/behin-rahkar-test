import { FormikProps } from 'formik';
import { FieldAttributes } from 'formik/dist/Field';

import Base from '@/components/@base/@helpers/types';

export interface Props extends Base {
  field: FieldAttributes<any>;
  form: FormikProps<any>;
  placeholder?: string;
  error?: string;
}

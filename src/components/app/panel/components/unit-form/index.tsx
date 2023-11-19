'use client';

import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { getUser } from '@/lib/helper';

import Button from '@/components/@base/button';
import { CurrencySchema } from '@/components/app/panel/components/unit-form/schema';
import FormInput from '@/components/shared/components/form-input';

import { useCurrencyStore } from '@/store/currency.store';

import localization from '@/constants/localization';
import { SIGN_UP } from '@/constants/routes';


export default function UnitForm() {
  const router = useRouter();
  const { reset, setDollar } = useCurrencyStore();
  const isUser = getUser();
  if (!isUser) {
    router.push(SIGN_UP);
    return null;
  }
  return (
    <Formik
      initialValues={{
        USD: 0
      }}
      validationSchema={CurrencySchema}
      onSubmit={values => {
        console.log(values);
        setDollar(values.USD);
      }}
      onReset={() => reset()}
    >
      {({ errors, touched, resetForm, initialStatus }) => (
        <Form className='grid grid-cols-2 gap-5'>

          <Field className='col-span-2' component={FormInput} name='USD' />

          <Button type='submit'>{localization.submit}</Button>
          <Button type='reset'>{localization.reset}</Button>
        </Form>
      )}
    </Formik>
  );
}

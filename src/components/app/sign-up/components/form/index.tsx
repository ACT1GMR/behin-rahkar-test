'use client';

import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { setUser } from '@/lib/helper';

import Button from '@/components/@base/button';
import { SignupSchema } from '@/components/app/sign-up/components/form/schema';
import FormInput from '@/components/shared/components/form-input';

import { PANEL } from '@/constants/routes';


export default function Formd() {
  const router = useRouter();

  return (
    <div>
      <h1 className='text-white p-4'>Signup</h1>
      <Formik
        initialValues={{
          country: '',
          city: '',
          username: '',
          email: '',
          password: ''

        }}
        validateOnBlur={false}
        validationSchema={SignupSchema}
        onSubmit={values => {
          router.push(PANEL);
          setUser(values);
        }}
      >
        {({ errors }) => (
          <Form autoComplete='off' className='flex flex-col gap-5 bg-white p-2.5 rounded'>

            <Field component={FormInput} name='country' error={errors.country} />


            <Field component={FormInput} name='city' error={errors.city} />


            <Field component={FormInput} name='username' error={errors.username} />


            <Field autoComplete='new-email' component={FormInput} name='email' type='email' error={errors.email} />


            <Field autoComplete='new-password' component={FormInput} name='password' type='password'
                   error={errors.password} />


            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

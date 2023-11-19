import * as Yup from 'yup';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};


export const SignupSchema = Yup.object().shape({
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string().matches(/[a-zA-Z0-9_]/, getCharacterValidationError('special')).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Please enter a password')
    // check minimum characters
    .min(8, 'Password must have at least 8 characters')
    // different error messages for different requirements
    .matches(/[a-zA-Z0-9!@#$%^&*)(+=._-]/, getCharacterValidationError('special'))
    .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
});
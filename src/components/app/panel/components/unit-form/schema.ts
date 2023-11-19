import * as Yup from 'yup';

export const CurrencySchema = Yup.object().shape({
  USD: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Please provide a first name'),
  lastName: yup.string().required('Please provide a last name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please provide an email address'),
  password: yup.string().required('Please enter a password'),
  verifyPassword: yup
    .string()
    .required('Please confirm your password')
    .test('password-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    })
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please provide an email address'),
  password: yup.string().required('Please enter a password')
});

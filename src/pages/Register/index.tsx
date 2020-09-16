import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import Layout from '../../components/Layout';
import {
  StyledField,
  StyledForm,
  StyledFormContainer
} from '../../styles/Form';

interface Values {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

export default function Register() {
  const initialValues: Values = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const registerSchema = yup.object().shape({
    firstName: yup.string().required('Please provide a first name'),
    lastName: yup.string().required('Please provide a last name'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please provide an email address'),
    password: yup.string().required('Please enter a password'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .test('password-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      })
  });

  return (
    <Layout showSidebar={false}>
      <StyledFormContainer>
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <StyledForm>
            <div>
              <label htmlFor='firstName'>First Name</label>
              <StyledField
                id='firstName'
                name='firstName'
                placeholder='Your first name'
                type='text'
              />
            </div>

            <div>
              <label htmlFor='lastName'>Last Name</label>
              <StyledField
                id='lastName'
                name='lastName'
                placeholder='Your last name'
                type='text'
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <StyledField
                id='email'
                name='email'
                placeholder='you@finstracka.com'
                type='email'
              />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <StyledField
                id='password'
                name='password'
                placeholder='******'
                type='password'
              />
            </div>

            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <StyledField
                id='confirmPassword'
                name='confirmPassword'
                placeholder='******'
                type='password'
              />
            </div>
          </StyledForm>
        </Formik>
      </StyledFormContainer>
    </Layout>
  );
}

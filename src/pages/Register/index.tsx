import React from 'react';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import Layout from '../../components/Layout';
import {
  StyledField,
  StyledForm,
  StyledFormContainer,
  SubmitButton
} from '../../styles/Form';
import { registerSchema } from '../../util/validationSchema';

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

  return (
    <Layout showSidebar={false}>
      <StyledFormContainer>
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            await setTimeout(() => {
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
              <ErrorMessage name='firstName' />
            </div>

            <div>
              <label htmlFor='lastName'>Last Name</label>
              <StyledField
                id='lastName'
                name='lastName'
                placeholder='Your last name'
                type='text'
              />
              <ErrorMessage name='lastName' />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <StyledField
                id='email'
                name='email'
                placeholder='you@finstracka.com'
                type='email'
              />
              <ErrorMessage name='email' />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <StyledField
                id='password'
                name='password'
                placeholder='******'
                type='password'
              />
              <ErrorMessage name='password' />
            </div>

            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <StyledField
                id='confirmPassword'
                name='confirmPassword'
                placeholder='******'
                type='password'
              />
              <ErrorMessage name='confirmPassword' />
            </div>
            <SubmitButton type='submit'>Submit</SubmitButton>
          </StyledForm>
        </Formik>
      </StyledFormContainer>
    </Layout>
  );
}

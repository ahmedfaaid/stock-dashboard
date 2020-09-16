import React from 'react';
import { Formik, FormikHelpers } from 'formik';
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
}

export default function Register() {
  const initialValues: Values = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  return (
    <Layout showSidebar={false}>
      <StyledFormContainer>
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
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
          </StyledForm>
        </Formik>
      </StyledFormContainer>
    </Layout>
  );
}

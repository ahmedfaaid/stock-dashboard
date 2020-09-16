import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import Layout from '../../components/Layout';
import {
  StyledField,
  StyledForm,
  StyledFormContainer
} from '../../styles/Form';

interface Values {
  email: String;
  password: String;
}

export default function Login() {
  const initialValues: Values = { email: '', password: '' };
  return (
    <Layout showSidebar={false}>
      <StyledFormContainer>
        <h2>Login</h2>
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

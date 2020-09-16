import React from 'react';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import Layout from '../../components/Layout';
import {
  StyledField,
  StyledForm,
  StyledFormContainer,
  SubmitButton
} from '../../styles/Form';
import { loginSchema } from '../../util/validationSchema';

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
          validationSchema={loginSchema}
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
          {({ errors }) => (
            <StyledForm>
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
              <SubmitButton type='submit'>Submit</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </StyledFormContainer>
    </Layout>
  );
}

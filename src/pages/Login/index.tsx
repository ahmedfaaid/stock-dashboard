import React, { useContext } from 'react';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import {
  StyledField,
  StyledForm,
  StyledFormContainer,
  SubmitButton
} from '../../styles/Form';
import { loginSchema } from '../../util/validationSchema';
import { login } from '../../util/authRequests';
import { AuthContext } from '../../contexts/AuthContext';

interface Values {
  email: String;
  password: String;
}

export default function Login() {
  const initialValues: Values = { email: '', password: '' };

  const history = useHistory();
  const { setAuth } = useContext(AuthContext);

  return (
    <Layout showSidebar={false} page='Login'>
      <StyledFormContainer>
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            await login(values);
            await setAuth();
            setSubmitting(false);
            await history.push('/dashboard');
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
              <p style={{ textAlign: 'center', marginTop: '15px' }}>
                Don't have an account?{' '}
                <Link to='/register' style={{ color: '#ffffff' }}>
                  Register here.
                </Link>
              </p>
              <SubmitButton type='submit'>Submit</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </StyledFormContainer>
    </Layout>
  );
}

import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledFormContainer = styled.div`
  position: relative;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    text-align: center;
    color: inherit;
    font-size: 40px;
  }
`;

export const StyledForm = styled(Form)`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
  padding: 20px;

  div {
    margin: 20px;
  }

  label {
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: #b8b8b8;
  }
`;

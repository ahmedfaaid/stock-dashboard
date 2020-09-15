import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHome = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
    width: max-content;
    text-transform: uppercase;
  }

  p {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const StyledHeroContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  div {
    margin-top: 20px;
  }
`;

export const StyledHeroButton = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  width: 180px;
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all ease-in-out 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.white};
  }
`;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: Boolean | undefined;
  component: React.ComponentType<any>;
  exact: any;
  path: String;
}

export default function ProtectedRoute({
  component: Component,
  isAuthenticated,
  exact,
  path,
  ...rest
}: ProtectedRouteProps) {
  return (
    <Route
      render={props => {
        if (isAuthenticated) {
          return <Component exact={exact} path={path} {...rest} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
}

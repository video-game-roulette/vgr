import React from 'react';
import { useUser } from '../../context/UserContext';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function ProtectedRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}

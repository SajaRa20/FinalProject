import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { HOME_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../Context/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);

  return (
    <Route {...rest}>
      {!isAuth && !authLoading ? (
        <Component />
      ) : (
        <Navigate to={HOME_PAGE} replace />
      )}
    </Route>
  );
}

export default PublicRoute;



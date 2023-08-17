import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  return <Route {...rest}>{isAuth && !authLoading && <Component />}</Route>;
}

export default PrivateRoute;

import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import AuthContext from '../Context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);
  return <Route {...rest}>{isAuth && <Component />}</Route>;
}

export default PrivateRoute;
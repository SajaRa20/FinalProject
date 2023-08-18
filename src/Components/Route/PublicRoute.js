import React, { useContext } from 'react';
import {  Route } from 'react-router-dom';

import { HOME_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../Context/AuthContext';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);

  return (
    <Route {...rest} element={
      !isAuth ? (
        <Component />
      ) : (
        <Navigate to={HOME_PAGE} />
      )
    } />
  );
}


export default PublicRoute;



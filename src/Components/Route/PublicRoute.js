
import React, { useContext } from 'react';
import {  Outlet,Navigate } from 'react-router-dom';

import { HOME_PAGE } from '../../Utils/routes.constant';

import AuthContext from '../Context/AuthContext';

function PublicRoute() {
  const { isAuth } = useContext(AuthContext);

  return (
   
      !isAuth ? <Outlet/> : <Navigate  to={HOME_PAGE} />

  );
}


export default PublicRoute;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import Landing from "../Pages/Landing";
import DetailsHouse from "../Pages/DetailsHouse";
import AboutUs from "../Pages/AboutUs";
import { PrivateRoute, PublicRoute } from "../Components/Route";
import NotFound from "../Pages/NotFound";
import SearchPage from "../Pages/Houses";

import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  HOUSES,
  PROFILE,
  FAVORITE,
  ABOUT_US,
} from "../Utils/routes.constant";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path={HOME_PAGE} element={<Landing />} />
          <Route path={ABOUT_US} element={<AboutUs />} />
          <Route path={`${HOUSES}/:id`} element={<DetailsHouse />} />
          {/* <PublicRoute path={LOGIN_PAGE} component={Login} />
          <PublicRoute path={SIGNUP_PAGE} component={Register} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <Router>
  <SearchPage/>
 </Router> */}
    </Layout>
  );
}

export default App;

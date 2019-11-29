import React, { Suspense, lazy } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Loader from "./Loader";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Achievement = lazy(() => import("./Achievement"));
const PrivateRoute = lazy(() => import("../utils/PrivateRoute"));

const App = () => (
  <Suspense fallback={<Loader />}>
    <nav className="header">
      <Link to="/" className="title">
        Thimbles
      </Link>
      <Link to="/achievement" className="title">
        Achievement
      </Link>
    </nav>
    <div className="flex">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/achievement" component={Achievement} />
        <Route path="/login" render={props => <Login {...props} />} />
      </Switch>
    </div>
  </Suspense>
);

export default App;

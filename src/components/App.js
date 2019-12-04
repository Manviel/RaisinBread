import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./Loader";
import Header from "./Header";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Achievement = lazy(() => import("./Achievement"));
const SignUp = lazy(() => import("./SignUp"));
const NotFound = lazy(() => import("./NotFound"));

const PrivateRoute = lazy(() => import("../utils/PrivateRoute"));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <div className="flex col">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/achievement" component={Achievement} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <SignUp {...props} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Suspense>
);

export default App;

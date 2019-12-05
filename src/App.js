import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader";
import Checkbox from "./components/Checkbox";

const Header = lazy(() => import("./layouts/Header"));
const Home = lazy(() => import("./layouts/Home"));
const Login = lazy(() => import("./layouts/Login"));
const Achievement = lazy(() => import("./layouts/Achievement"));
const SignUp = lazy(() => import("./layouts/SignUp"));
const Trending = lazy(() => import("./layouts/Trending"));
const NotFound = lazy(() => import("./layouts/NotFound"));

const PrivateRoute = lazy(() => import("./utils/PrivateRoute"));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Header />
    <div className="flex center col">
      <Checkbox />

      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/achievement" component={Achievement} />
        <PrivateRoute exact path="/trending" component={Trending} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <SignUp {...props} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Suspense>
);

export default App;

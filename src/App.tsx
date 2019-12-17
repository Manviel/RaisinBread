import React, { Suspense, lazy } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

import Loader from "./components/Loader";
import Checkbox from "./forms/Checkbox";

import useTheme from "./utils/useTheme";
import PrivateRoute from "./utils/PrivateRoute";

const Header = lazy(() => import("./layouts/Header"));
const Home = lazy(() => import("./layouts/Home"));
const Login = lazy(() => import("./layouts/Login"));
const Achievement = lazy(() => import("./layouts/Achievement"));
const SignUp = lazy(() => import("./layouts/SignUp"));
const Trending = lazy(() => import("./layouts/Trending"));
const NotFound = lazy(() => import("./layouts/NotFound"));
const ToolForm = lazy(() => import("./layouts/ToolForm"));
const Payment = lazy(() => import("./layouts/Payment"));

const App = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <div className="flex center col">
        <Checkbox
          name="switch"
          checked={theme === "dark"}
          onChange={setTheme}
        />

        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/achievement" component={Achievement} />
          <PrivateRoute exact path="/trending" component={Trending} />
          <PrivateRoute exact path="/pay/:id" component={Payment} />
          <Route
            path="/login"
            render={(props: RouteComponentProps) => <Login {...props} />}
          />
          <Route
            path="/signup"
            render={(props: RouteComponentProps) => <SignUp {...props} />}
          />
          <Route path="/tool" component={ToolForm} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
};

export default App;

import { Route, Switch } from "react-router-dom";
import "./App.css";

import Error from "./screens/Error";
import TestScreen from "./screens/TestScreen"

function Routes() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={TestScreen} />
        <Route component={Error} />
          </Switch>
          </>
    )
}

export default Routes;

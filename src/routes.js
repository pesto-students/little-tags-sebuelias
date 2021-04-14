import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './utils/constants/routePaths';
// import { Home, /* ErrorPage, */ Category } from './screens';

import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import Category from './screens/Category';

function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path={ROUTES.CATEGORIES}>
        <Category />
      </Route>
      <Route path={ROUTES.ERROR}>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default Routes;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './utils/constants/routePaths';
import './App.scss';

import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import Category from './screens/Category';
import Product from './screens/Product'

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.CATEGORIES} component={Category}/>
          <Route exact path={ROUTES.PRODUCT} component={Product}/>
          <Route exact path={ROUTES.SIGN_IN} component={Category} />
          <Route path={ROUTES.ERROR} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './utils/constants/routePaths';
import './App.scss';

import ErrorPage from './screens/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Category from './screens/Category';

function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.CATEGORIES} component={Category}/>
          <Route path={ROUTES.SIGN_IN} component={Category} />
          <Route path={ROUTES.ERROR} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Routes;

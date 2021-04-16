import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './utils/constants/routePaths';
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
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.CATEGORIES}>
            <Category />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <Category />
          </Route>
          <Route path={ROUTES.ERROR}>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Routes;

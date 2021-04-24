import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './utils/constants/routePaths';
import './App.scss';

import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import Category from './screens/Category';
import Product from './screens/Product'
import Address from './screens/Address';
import OrderPlaced from './screens/OrderPlaced';
import Wishlist from './screens/Wishlist';
import Payment from './screens/Payment';
import Header from './components/Header';
import Footer from './components/Footer';

function Routes() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.CATEGORIES} component={Category}/>
          <Route exact path={ROUTES.PRODUCT} component={Product}/>
          <Route exact path={ROUTES.ADDRESS} component={Address} />
          <Route exact path={ROUTES.ORDER_PLACED} component={OrderPlaced} />
          <Route exact path={ROUTES.SIGN_IN} component={Category} />
          <Route exact path={ROUTES.WISHLIST} component={Wishlist} />
          <Route exact path={ROUTES.PAYMENT} component={Payment} />
          <Route path={ROUTES.ERROR} component={ErrorPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routes;

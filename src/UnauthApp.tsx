import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

import './index.css';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home.component';
import { Shop } from './pages/Shop/Shop.component';
import { Cart } from './pages/Cart/Cart.component';
import { Details } from './pages/Details/Details.component';
import { Auth } from './pages/Auth/Auth.component';

import { Store } from './modules/rootReducer';
import { selectIsAuth } from './modules/user/user.selectors';

interface IProps {
  isAuth: boolean;
}

const _UnauthApp: React.FC<IProps> = ({ isAuth }) => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={Details} />
        <Route
          path="/account"
          render={() => (isAuth ? <Redirect to="/shop" /> : <Auth />)}
        />
      </Switch>
    </Layout>
  </Router>
);

interface UnauthAppSelection {
  isAuth: boolean;
}

const mapStateToProps = createStructuredSelector<Store, UnauthAppSelection>({
  isAuth: selectIsAuth
});

export default connect(mapStateToProps)(_UnauthApp);

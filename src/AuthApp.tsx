import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './index.css';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home.component';
import { Shop } from './pages/Shop/Shop.component';
import { Cart } from './pages/Cart/Cart.component';
import { Details } from './pages/Details/Details.component';

const AuthApp: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={Details} />
        <Route path="/account" render={() => <Redirect to="/shop" />} />
      </Switch>
    </Layout>
  </Router>
);

export default AuthApp;

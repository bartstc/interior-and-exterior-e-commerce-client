import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home.component';
import { Shop } from './pages/Shop/Shop.component';
import { Cart } from './pages/Cart/Cart.component';

export const App: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Layout>
  </Router>
);

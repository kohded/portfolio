import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Home from 'pages/Home';

const app = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default app;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Home from 'pages/Home';

const app = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default app;

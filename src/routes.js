import React from 'react';
import { Route } from 'react-router';

import App from './App';
import ProfilePage from './components/ProfilePage';

export default (
  <Route path="/" component={App}>
    <Route path="/profile" component={ProfilePage} />
  </Route>
)

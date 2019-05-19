import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostList, SubReddit } from './pages';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route path="/:subreddit" component={SubReddit} />
    </Switch>
  </Router>
);

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PostList, SubReddit } from './pages';
import { PageContainer } from './components';

const App = () => (
  <Router>
    <PageContainer>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/:subreddit" component={SubReddit} />
      </Switch>
    </PageContainer>
  </Router>
);

export default App;

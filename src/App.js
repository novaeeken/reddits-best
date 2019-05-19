import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PostList, SubReddit } from './pages';

const App = () => (
  <Router>
    <p>
      This is where all the components are going to be!
    </p>

    <PostList posts={ [1,2,3,4,5] } />
    <SubReddit />
  </Router>
);

export default App;

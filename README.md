## Introduction

I was asked to make a Single Page Application that showed you the top 10 posts on Reddit! I used Create-React-App and styled it with Styled Components.

## Design choices

Instead of the usual lifeCycleMethod ComponentDidMount(), but I really wanted to experiment with React Hooks and Side Effects instead. It worked great, but since data fetching within effect hooks is a bit experimental and I'm not very experienced in writing tests, I wasn't sure how to write the appropriate tests for this approach. There isn't a lot of documentation about testing data fetching with React Hooks, so I choose to go back to lifeCycle methods so I could deliver a testable application.

To give you an idea, the `useFetchData` method looked like this:

```
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = url => {
  // set individual pieces of state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        setItems(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    // add second parameter to useEffect, to prevent refetching on update
    // also declares that it's dependent on the parameter url. If one of these dependencies change,the hook runs again
  }, [url]);

  return {
    error,
    loading,
    items,
  };
};
```

Ideally it would be paired with Suspense for datafetching, but this isn't released yet (expeced mid 2019). The current version of Suspense, meant for lazy loading, could be modified to behave this way, but this is obviously a bit hacky. It would look like this:

```
import React, { Suspense } from 'react';
// components would return null (instead of the actual component) as long as loading is true;
import { PostList, SubReddit } from './pages';

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={PostList}/>
        <Route path="/:subreddit" component={SubReddit}/>
      </Switch>
    </Suspense>
  </Router>
);
```

## Writing tests
I wanted to test the rendering of the components I build, but I discovered many people have issues writing test for components that get their styling from a theme provider (Styled Components). Unfortunately, most solutions I could find were over a year old and already contained deprecated code or solutions that didn't work with Styled Components 4.0^. I therefore couldn't get the tests to pass and solely wrote tests for the helper functions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

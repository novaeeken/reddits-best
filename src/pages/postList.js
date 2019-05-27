import React, { Fragment } from 'react';
import {
  Heading,
  Post,
  Loader,
} from '../components';
import {
  fetchData,
  getDotNotation,
} from '../helpers';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: [],
    };
  }

  componentDidMount() {
    fetchData('https://www.reddit.com/best.json?limit=10').then(result => {
      this.setState({
        loading: false,
        items: result.children,
      });
    });
  }

  render() {
    const { items, loading } = this.state;
    if(loading) { return <Loader /> };
    if(!items) { return <p>Er is iets misgegaan bij het ophalen van de data.</p>}

    return (
      <div>
      {items &&
        <Fragment>
          <Heading title="Home" subtitle="Top 10 posts" indent />
          {items.map(item => {
            const {
              id,
              title,
              subreddit,
              subreddit_name_prefixed,
              score,
              url,
            } = item.data;

            return (
              <Post
                key={id}
                title={title}
                subreddit={subreddit}
                subredditPrefixed={subreddit_name_prefixed}
                numberOfPoints={getDotNotation(score)}
                link={url}
              />
            )
          })}
        </Fragment>
      }
    </div>
    );
  }
}

export default PostList;

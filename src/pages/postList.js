import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  Post,
} from '../components';
import { useFetchData } from '../helpers';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const PostList = () => {
  const { error, loading, items } = useFetchData('https://www.reddit.com/best.json?limit=10');

  if (error) { return <span>Error:{error.message}</span> }
  if (loading) { return <span>Loading...</span> };

  console.log(items)

  return (
    <PageContainer>
      <div>
        <Heading title="Home" subtitle="Top 10 posts" indent />
        {items.data
          && items.data.children.map(item => {
            return (<Post
                key={item.data.id}
                title={item.data.title}
                subreddit={item.data.subreddit}
                subredditPrefixed={item.data.subreddit_name_prefixed}
                numberOfPoints={item.data.score}
              />)
            })
        }
      </div>
    </PageContainer>
  );
};

export default PostList;

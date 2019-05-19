import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  Post,
} from '../components';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const PostList = ({ posts }) => (
  <PageContainer>
    <div>
      <Heading title="Home" subtitle="Top 10 posts" indent />
      {posts.map(item => (
      <Post title="What’s something the internet killed that you miss?" subreddit="AskReddit" numberOfPoints="12.876" />
      ))}
    </div>
  </PageContainer>
);

export default PostList;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.article`
  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.paddingMobile};
  margin: 0;
  width: 100%;
  @media only screen and (min-width: 667px) {
    max-width: 43rem;
    margin: 1rem 0;
    padding: ${(props) => props.theme.paddingDefault};
  }
`;

const PostTitleLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue700};

  h4 {
    font-weight: bold;
    font-size: 24px;
    padding: 0 0 0.75rem 0;
  }

  &:visited, :active {
    color: ${(props) => props.theme.colors.blue700};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue600};
  }
`;

const SubredditLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue400};
  padding: 0 .25rem 0 0;

  h5 {
    font-weight: bold;
    font-size: 18px;
  }

  &:visited, :active {
    color: ${(props) => props.theme.colors.blue400};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue300};
  }
`;

const Points = styled.h6`
  color: ${(props) => props.theme.colors.gray500};
  font-size: 18px;
  font-weight: 400;
`;

const PostDetails = styled.section`
  display: flex;
  align-items: center;
`;

const Post = ({ title, subreddit, subredditPrefixed, numberOfPoints }) => (
  <Card>
    <PostTitleLink to="/"><h4>{title}</h4></PostTitleLink>
    <PostDetails>
      <SubredditLink to={`/${subreddit}`}><h5>{subredditPrefixed}</h5></SubredditLink>
      <Points><strong>• {numberOfPoints}</strong> points</Points>
    </PostDetails>
  </Card>
);

export default Post;


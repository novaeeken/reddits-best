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

const PostTitleLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue700};

  &:visited, :active {
    color: ${(props) => props.theme.colors.blue700};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue600};
  }
`;

export const PostTitle = styled.h4`
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0 0.75rem 0;
`;

const SubredditLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue400};
  padding: 0 .25rem 0 0;

  &:visited, :active {
    color: ${(props) => props.theme.colors.blue400};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue300};
  }
`;

export const Subreddit = styled.h5`
  font-weight: bold;
  font-size: 1rem;
`;

export const Points = styled.h6`
  color: ${(props) => props.theme.colors.gray500};
  font-size: 1rem;
  font-weight: 400;
`;

const PostDetails = styled.section`
  display: flex;
  align-items: center;
`;

const Post = ({ title, subreddit, subredditPrefixed, numberOfPoints, link }) => (
  <Card>
    <PostTitleLink href={link}>
      <PostTitle>{title}</PostTitle>
    </PostTitleLink>
    <PostDetails>
      <SubredditLink to={`/${subreddit}`}>
        <Subreddit>{subredditPrefixed}</Subreddit>
      </SubredditLink>
      <Points><strong>• {numberOfPoints}</strong> points</Points>
    </PostDetails>
  </Card>
);

export default Post;


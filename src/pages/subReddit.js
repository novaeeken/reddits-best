import React from 'react';
import styled from 'styled-components'
import {
  Heading,
  TitleDescriptionPair,
  BackNavigation,
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

const Details = styled.article`
  width: 100%;
  margin: 2rem 0;
  @media only screen and (min-width: 667px) {
    max-width: 43rem;
    margin: 4rem 0;
  }
`;

const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.paddingMobile};
  @media only screen and (min-width: 667px) {
    padding: 0 ${(props) => props.theme.paddingDefault};
  }
`;

const SubReddit = ({ match }) => {
  const { subreddit } = match.params;
  const { error, loading, items } = useFetchData(`https://www.reddit.com/r/${subreddit}/about.json`);

  if (error) { return <span>Error:{error.message}</span> }
  if (loading) { return <span>Loading...</span> };

  return (<PageContainer>
    <Wrapper>
      <BackNavigation title="Home" />
      {items.data && <Heading title={items.data.display_name_prefixed} subtitle="Subreddit details" /> }
      <Details>
        {items.data && <TitleDescriptionPair title="Title" description={items.data.title} />}
        {items.data && <TitleDescriptionPair title="Public Description" description={items.data.public_description} />}
        {items.data && <TitleDescriptionPair title="Subscriber count" description={items.data.subscribers} />}
      </Details>
    </Wrapper>
  </PageContainer>)
};

export default SubReddit;

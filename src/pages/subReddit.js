import React from 'react';
import styled from 'styled-components'
import {
  Heading,
  TitleDescriptionPair,
  BackNavigation,
} from '../components';

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

const SubReddit = () => (
  <PageContainer>
    <Wrapper>
      <BackNavigation title="Home" />
      <Heading title="r/AskReddit" subtitle="Subreddit details" />
      <Details>
        <TitleDescriptionPair title="Title" description="Ask Reddit..." />
        <TitleDescriptionPair title="Public Description" description="/r/AskReddit is the place to ask and answer thought-provoking questions." />
        <TitleDescriptionPair title="Subscriber count" description="22.206.671" />
      </Details>
    </Wrapper>
  </PageContainer>
);

export default SubReddit;

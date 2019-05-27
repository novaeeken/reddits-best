import React, { Fragment } from 'react';
import styled from 'styled-components'
import {
  Heading,
  TitleDescriptionPair,
  BackNavigation,
  Loader,
} from '../components';
import {
  fetchData,
  getDotNotation,
} from '../helpers';

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

class SubReddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.match.params.subreddit,
      loading: true,
      data: {},
    };
  }

  componentDidMount() {
    fetchData(`https://www.reddit.com/r/${this.state.subreddit}/about.json`).then(result => {
      this.setState({
        loading: false,
        data: result,
      });
    });
  }

  render() {
    const { data, loading } = this.state;
    if(loading) { return <Loader /> };
    if(!data) { return <p>Er is iets misgegaan bij het ophalen van de data.</p>}

    return (
      <Wrapper>
        {data &&
          <Fragment>
            <BackNavigation title="Home" />
            <Heading title={data.display_name_prefixed} subtitle="Subreddit details" />
            <Details>
              <TitleDescriptionPair title="Title" description={data.title} />
              <TitleDescriptionPair title="Public Description" description={data.public_description} />
              <TitleDescriptionPair title="Subscriber count" description={getDotNotation(data.subscribers)} />
            </Details>
          </Fragment>
        }
      </Wrapper>
    )
  }
}

export default SubReddit;

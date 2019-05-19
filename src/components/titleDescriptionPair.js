import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h4`
  color: ${(props) => props.theme.blue700};
  font-weight: bold;
  font-size: 26px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.blue600};
  font-size: 20px;
`;

const TitleDescriptionPair = ({ title, description }) => (
  <Fragment>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Fragment>
);

export default TitleDescriptionPair;


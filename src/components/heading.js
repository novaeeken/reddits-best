import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.blue700};
  font-size: 48px;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.gray500};
  font-size: 26px;
  font-weight: bold;
`;

const Heading = ({ title, subtitle }) => (
  <Fragment>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Fragment>
);

export default Heading;

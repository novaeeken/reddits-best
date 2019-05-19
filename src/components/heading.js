import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue700};
  font-size: 48px;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.gray500};
  font-size: 26px;
  font-weight: bold;
`;

const HeadingWrapper = styled.div`
  ${(props) => props.indent && css`
    padding-left: ${(props) => props.theme.paddingMobile};
    @media only screen and (min-width: 667px) {
      padding-left: ${(props) => props.theme.paddingDefault};
    }
  `};
`;

const Heading = ({ title, subtitle, indent }) => (
  <HeadingWrapper indent={indent} >
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeadingWrapper>
);

export default Heading;

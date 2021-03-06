import React from 'react';
import styled, { css } from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue700};
  font-size: 2.625rem;
  font-weight: 900;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.gray500};
  font-size: 1.375rem;
  font-weight: bold;
`;

const HeadingWrapper = styled.div`
  ${(props) => props.indent && css`
    padding-left: ${(props) => props.theme.paddingMobile};
    @media only screen and (min-width: 667px) {
      padding-left: ${(props) => props.theme.paddingDefault};
    }
  `};

  @media only screen and (min-width: 667px) {
    margin: 0 0 3rem 0;
  }
  margin: 0 0 1.5rem 0;
`;

const Heading = ({ title, subtitle, indent }) => (
  <HeadingWrapper indent={indent} >
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeadingWrapper>
);

export default Heading;

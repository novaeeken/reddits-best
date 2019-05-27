import React from 'react';
import styled from 'styled-components';

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.blue700};
  font-weight: bold;
  font-size: 1.375rem;
  padding: 0 0 1rem 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.blue600};
  font-size: 1.125rem;
`;

const PairWrapper = styled.section`
  margin: 1.5rem 0;
`;

const TitleDescriptionPair = ({ title, description }) => (
  <PairWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </PairWrapper>
);

export default TitleDescriptionPair;


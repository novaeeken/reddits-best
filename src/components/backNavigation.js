import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from '../assets/back.svg';
import styled from 'styled-components';

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.blue400};
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 0;

  &:visited, :active {
    color: ${(props) => props.theme.colors.blue400};
  }
  &:hover {
    color: ${(props) => props.theme.colors.blue300};
  }

  h3 {
    padding: 0 0 0 0.5rem;
  }
`;

const BackNavigation = ({ title }) => (
  <BackButton to="/">
    <Back />
    <h3>{title}</h3>
  </BackButton>
)

export default BackNavigation;

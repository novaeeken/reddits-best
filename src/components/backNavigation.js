import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from '../assets/back.svg';
import styled from 'styled-components';

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.blue400};
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;

  &:visited, :active {
    color: ${(props) => props.theme.blue400};
  }
  &:hover {
    color: ${(props) => props.theme.blue300};
  }

  h3 {
    margin: 0 0 0 0.25rem;
  }
`;

const BackNavigation = ({ title }) => (
  <BackButton to="/">
    <Back />
    <h3>{title}</h3>
  </BackButton>
)

export default BackNavigation;

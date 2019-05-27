import React from 'react';
import styled, { keyframes } from 'styled-components';

const duration = 1;

const Container = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
`;

const Bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem)
  }
  100% {
    transform: translateY(0);
  }
`;

const Dot = styled.div`
  animation: ${Bounce} ${duration}s linear infinite;
  background-color: ${(props) => props.theme.colors.blue700};
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
`;

const Dot1 = styled(Dot)`
  animation-delay: 0s;
`;

const Dot2 = styled(Dot)`
  animation-delay: ${(duration / 4) * 1.25}s;
`;

const Dot3 = styled(Dot)`
  animation-delay: ${(duration / 4) * 2}s;
`;

const Loader = () => (
  <Container>
    <Dot1 />
    <Dot2 />
    <Dot3 />
  </Container>
);

export default Loader;

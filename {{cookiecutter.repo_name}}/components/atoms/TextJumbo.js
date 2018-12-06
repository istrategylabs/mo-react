import styled from 'styled-components';

export default styled.h1`
  color: ${({ color }) => color || 'inherit'};
  font-size: 4.2rem;
  font-weight: normal;
  line-height: 1.1;
`;

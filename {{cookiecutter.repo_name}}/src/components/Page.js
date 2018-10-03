import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../styles/colors';
import Grid from './Grid';
import Column from './Column';

const StyledPage = styled.div`
  h1 {
    font-size: 5vmin;
    font-weight: normal;
    color: ${TEXT};
  }
  p {
    font-size: 1rem;
  }
`;

export default ({ children }) => {
  return <Grid>
    <Column width={12}>
      <StyledPage>
        {children}
      </StyledPage>
    </Column>
  </Grid>
};

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Grid from '../atoms/Grid';
import Column from '../atoms/Column';
import Nav from '../molecules/Nav';

const StyledContainer = styled.div`
  background: #eee;
  padding: 20px 0;
`;

const StyledHeader = styled.header`
  display: flex;

  img {
    margin-right: 20px;
  }

  nav {
    flex-grow: 2;
  }
`;

export default (props) => (
  <StyledContainer>
    <Grid>
      <Column width={12}>
        <StyledHeader>
          <Link href="/">
            <a>
              <img className="logo" src="/static/logo.svg" alt="{{ cookiecutter.project_name }}" height="auto" width={210} data-testid="home-image" />
            </a>
          </Link>
          <Nav />
        </StyledHeader>
      </Column>
    </Grid>
  </StyledContainer>
);

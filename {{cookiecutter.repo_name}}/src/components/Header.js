import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./thing.scss";

import Grid from './Grid';
import Column from './Column';
import Nav from './Nav';

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
          <Link to="/">
            <img className="logo thing" src="/images/logo.svg" alt="{{ cookiecutter.project_name }}" height="auto" width={210} data-testid="home-image" />
          </Link>
          <Nav />
        </StyledHeader>
      </Column>
    </Grid>
  </StyledContainer>
);

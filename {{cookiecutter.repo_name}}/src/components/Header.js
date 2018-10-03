import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../routes';

import Grid from './Grid';
import Column from './Column';
import Nav from './Nav';
import NavLink from './NavLink';

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
            <img className="logo" src="/images/logo.svg" alt="{{ cookiecutter.project_name }}" height="auto" width={210} />
          </Link>
          <Nav>
            <h1>Navigation</h1>
            {routes.map((route, i) => (
              <NavLink key={i} {...route} />
            ))}
          </Nav>
        </StyledHeader>
      </Column>
    </Grid>
  </StyledContainer>
);

import React from 'react';
import styled from 'styled-components'
import routes from '../routes';
import NavLink from './NavLink';

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e7e7e7;

  h1 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.975rem;
  }

  > * {
    margin: 0 10px;
    margin-top: 0;
  }
`;

export default (props) => (
  <StyledNav>
    <h1>Navigation</h1>
    {routes.map((route, i) => (
      <NavLink key={i} {...route} />
    ))}
  </StyledNav>
)
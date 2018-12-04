import React from 'react';
import styled from 'styled-components';
import NavLink from '../atoms/NavLink';

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
    <NavLink href="/">Home</NavLink>
  </StyledNav>
)

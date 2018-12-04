import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, TEXT } from '../../styles/colors';

const NavLink = styled.div`
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${props => props.active ? PRIMARY : TEXT};
    text-decoration: none;
    border-bottom: 2px solid;
    border-bottom-color: ${props => props.active ? 'rgba(0, 0, 255, 0.1)' : 'transparent'};
    &:hover, &:active, &:focus {
      color: ${props => props.active ? PRIMARY : SECONDARY};
    }
  }
`;

export default ({ href, active, children }) => (
  <NavLink active={active}>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </NavLink>
);

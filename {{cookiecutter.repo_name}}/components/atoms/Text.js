import { createElement } from 'react';
import styled from 'styled-components';

const sizes = {
  small: '0.8rem',
  large: '2.6rem',
  xlarge: '3rem',
  xxlarge: '3.6rem',
  jumbo: '4.2rem'
};

const fontWeights = {
  xlarge: 'bold',
  jumbo: 'normal'
};

const lineHeights = {
  xxlarge: '1.2',
  jumbo: '1.1'
}

const Text = styled(({ tag, children, ...props }) => createElement(tag, props, children))`
  color: ${props => props.color};
  font-size: ${props => sizes[props.size] || '1rem'};
  font-weight: ${props => fontWeights[props.size] || 'normal'};
  line-height: ${props => lineHeights[props.size] || 'inherit'};
`;

Text.defaultProps = {
  color: 'inherit',
  tag: 'p',
  size: 'normal'
};

export default Text;

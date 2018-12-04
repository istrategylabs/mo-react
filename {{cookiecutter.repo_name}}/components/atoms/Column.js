import React from 'react';
import styled from 'styled-components';
import { XL, L, M, S } from '../../styles/breakpoints';
import { SMALL } from '../../styles/spacing';

const sub = (gutter, cols) => ( cols * 11 * gutter - 12 * ( cols - 1 ) * gutter ) / 12;

const StyledColumn = styled.div`
  margin-bottom: ${props => props.marginBottom ? SMALL : 0}px;
  margin-right: ${props => props.XSlast ? 0 : SMALL}px;
  width: calc(${props => 100 * props.xSmallWidth / 12}% - ${props => sub(SMALL, props.xSmallWidth)}px);

  @media screen and (min-width: ${S + 1}px) {
    margin-bottom: ${props => props.marginBottom ? SMALL : 0}px;
    margin-right: ${props => props.Slast ? 0 : SMALL}px;
    width: calc(${props => 100 * props.smallWidth / 12}% - ${props => sub(SMALL, props.smallWidth)}px);
  }

  @media screen and (min-width: ${M + 1}px) {
    margin-bottom: ${props => props.marginBottom ? SMALL : 0}px;
    margin-right: ${props => props.Mlast ? 0 : SMALL}px;
    width: calc(${props => 100 * props.medWidth / 12}% - ${props => sub(SMALL, props.medWidth)}px);
  }

  @media screen and (min-width: ${L + 1}px) {
    margin-bottom: ${props => props.marginBottom ? SMALL : 0}px;
    margin-right: ${props => props.Llast ? 0 : SMALL}px;
    width: calc(${props => 100 * props.largeWidth / 12}% - ${props => sub(SMALL, props.largeWidth)}px);
  }

  @media screen and (min-width: ${XL + 1}px) {
    margin-bottom: ${props => props.marginBottom ? 2 * SMALL : 0}px;
    margin-right: ${props => props.XLlast ? 0 : 2 * SMALL}px;
    width: calc(${props => 100 * props.width / 12}% - ${props => sub(2 * SMALL, props.width)}px);
  }

  @media print {
    display: ${props => props.hidePrint ? 'none !important' : 'block'};
  }
`;

/**
 * Columns should always, always be direct children of Grids.
 * They can contain whatever children you might want. The `width` prop is required,
 * and sets the Column's width at the largest level (>1440px). At smaller screen sizes, the width
 * is inferred from the next largest size. So:
 *
 * <Column width={4}> will always be 4-wide.
 * <Column width={4} largeWidth={6}> will be 4-wide above 1440px, 6-wide at 1440px and below.
 * <Column width={4} largeWidth={6} medWidth={12}> etc. etc.
 *
 * Valid props are:
 * - width
 * - largeWidth
 * - medWidth
 * - smallWidth
 * - xSmallWidth
 */
const Column = (props) => {

  const {
    width,
    largeWidth = width,
    medWidth = largeWidth,
    smallWidth = medWidth,
    xSmallWidth = smallWidth,
    children,
    marginBottom = false,
    hidePrint = false
  } = props;

  const colProps = Object.assign({}, props, {
    width,
    largeWidth,
    medWidth,
    smallWidth,
    xSmallWidth,
    marginBottom,
    hidePrint
  });

  return <StyledColumn {...colProps}>
    {children}
  </StyledColumn>;
};

export default Column;

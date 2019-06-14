import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : '0px')};
  margin-right: ${props =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : '0px')};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : '0px'};
  background: ${props => (props.background ? props.background : '')};
  height: ${props => (props.height ? `${props.height}px` : '100%')};
  flex: ${props => (props.flex ? props.flex : 0)};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'left'};
`;

export const FlexWrap = styled.div`
  flex: ${props => props.flex || 1};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
`;

export const Block = styled.div`
  display: inline-block;
  position: relative;
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => `${props.height}px`};
  margin-left: ${props => `${props.left}px`};
  margin-right: ${props => `${props.right}px`};
  margin-top: ${props => `${props.top}px`};
  margin-bottom: ${props => `${props.bottom}px`};
  background-color: ${props => (props.bgcolor ? props.bgcolor : '')};
  padding-top: ${props => `${props.paddingTop}px`};
  padding-bottom: ${props => `${props.paddingBottom}px`};
  padding-left: ${props => `${props.paddingLeft}px`};
  padding-right: ${props => `${props.paddingRight}px`};
  border-radius: ${props => `${props.borderRadius}px`};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  &:hover {
    background-color: ${props => (props.hover ? props.hover : '')};
  }
`;

import { FlexContainer, FlexWrap } from '../../styledComponents/CommonWrap';
import React, { Component } from 'react';

export default class Sketch extends Component {
  render() {
    return (
      <FlexContainer id="head" background={'#f9f9f9'}>
        <div>title</div>
        <FlexContainer
          id="body"
          flex={1}
          flexDirection={'row'}
          background={'#f9f9f9'}
        >
          <FlexWrap id="sider" flex={'0'}>
            {this.props.sider}
          </FlexWrap>
          <FlexContainer id="content" flex={'1'}>
            {this.props.content}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

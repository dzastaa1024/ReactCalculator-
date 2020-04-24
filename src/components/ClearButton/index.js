import React, { Component } from "react";
import styled from "styled-components";

export default class ClearButton extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.handleClear}>{this.props.children}</Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #c5c3cd;
  height: 3.5rem;
  outline: 1px solid #b3abab;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: lighter;
  font-size: 1.4rem;
  color: black;
  flex: 1;
`;

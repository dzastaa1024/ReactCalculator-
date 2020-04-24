import React, { Component } from "react";
import styled from "styled-components";

export default class Input extends Component {
  render() {
    return <InputWrapper> {this.props.value} </InputWrapper>;
  }
}

const InputWrapper = styled.div`
  display: flex;
  background-color: black;
  height: 5rem;
  outline: 1px solid gray;
  color: white;
  font-size: 2.5rem;
  justify-content: flex-end;
  align-items: flex-end;
`;

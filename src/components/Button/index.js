import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class Button extends Component {
  render() {
    const isOperator = (val) => {
      return !isNaN(val) || val === "." || val === "=";
    };
    return (
      <ButtonWrapper
        operator={!isOperator(this.props.children)}
        onClick={() => this.props.addToInput(this.props.children)}
      >
        {this.props.children}
      </ButtonWrapper>
    );
  }
}

const ButtonWrapper = styled.div`
  background-color: #e0e1e6;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  font-size: 1.4rem;
  color: #888;
  flex: 1;
  outline: 1px solid #888;
  padding: 5px;

  ${(props) =>
    props.operator &&
    css`
      background-color: orange;
      color: white;
    `}
`;

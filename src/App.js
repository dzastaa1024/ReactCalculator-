import React, { Component } from "react";
import styled from "styled-components";
import * as math from "mathjs";

import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Input from "./components/Input";

export default class App extends Component {
  state = {
    value: "",
  };

  handleChange = (value) => {
    this.setState({
      value: "",
    });
  };

  handleClear = () => {
    this.setState({
      value: "",
    });
  };

  addToInput = (val) => {
    this.setState({
      value: this.state.value + val,
    });
  };

  handleEqual = () => {
    this.setState({ value: math.evaluate(this.state.value) });
  };

  render() {
    return (
      <AppWrapper>
        <CalcWrapper>
          <Input value={this.state.value} />
          <Row>
            <Button addToInput={this.addToInput}>7</Button>
            <Button addToInput={this.addToInput}>8</Button>
            <Button addToInput={this.addToInput}>9</Button>
            <Button addToInput={this.addToInput}>/</Button>
          </Row>
          <Row>
            <Button addToInput={this.addToInput}>4</Button>
            <Button addToInput={this.addToInput}>5</Button>
            <Button addToInput={this.addToInput}>6</Button>
            <Button addToInput={this.addToInput}>*</Button>
          </Row>
          <Row>
            <Button addToInput={this.addToInput}>1</Button>
            <Button addToInput={this.addToInput}>2</Button>
            <Button addToInput={this.addToInput}>3</Button>
            <Button addToInput={this.addToInput}>+</Button>
          </Row>
          <Row>
            <Button addToInput={this.addToInput}>.</Button>
            <Button addToInput={this.addToInput}>0</Button>
            <Button addToInput={this.handleEqual}>=</Button>
            <Button addToInput={this.addToInput}>-</Button>
          </Row>
          <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
        </CalcWrapper>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const CalcWrapper = styled.div`
  width: 20rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

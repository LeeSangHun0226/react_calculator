import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';

import Buttons from './Buttons';
import Button from './Button';
import Display from './Display';

import calculateButtonData from './calculateButtonData';
import validateDataValue from './helper/validateDataValue';
import './App.css';

class App extends Component {
  state = {
    operations: [],
  }

  calculateOperations = () => {
    const { operations } = this.state;
    let result = operations.join('');
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        operations: [result],
      });
    }
  }

  handleClick = (e) => {
    const { operations } = this.state;
    const dataValue = e.target.getAttribute('data-value');
    const value = validateDataValue(dataValue);
    const newOperations = update(operations, {
      $push: [value],
    });
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        });
        break;

      case 'equal':
        this.calculateOperations();
        break;

      default:
        this.setState({
          operations: newOperations,
        });
        break;
    }
  }

  render() {
    const { operations } = this.state;
    const { handleClick } = this;
    return (
      <div className="App">
        <Display data={operations} />
        <Buttons>
          {
            calculateButtonData.map((data) => {
              const { label, value, index } = data;
              return (
                <Button key={index} onClick={handleClick} label={label} value={value} />
              );
            })
          }
        </Buttons>
      </div>
    );
  }
}

export default App;

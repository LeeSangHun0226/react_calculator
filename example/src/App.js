import React, { Component } from 'react';
import update from 'immutability-helper';
import math from 'mathjs';

import Buttons from './Buttons';
import Button from './Button';
import Display from './Display';

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
    const value = e.target.getAttribute('data-value');
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
          <Button onClick={handleClick} label="C" value="clear" />
          <Button onClick={handleClick} label="7" value="7" />
          <Button onClick={handleClick} label="4" value="4" />
          <Button onClick={handleClick} label="1" value="1" />
          <Button label="" value="null" />

          <Button label="" value="null" />
          <Button onClick={handleClick} label="8" value="8" />
          <Button onClick={handleClick} label="5" value="5" />
          <Button onClick={handleClick} label="2" value="2" />
          <Button onClick={handleClick} label="0" value="0" />

          <Button onClick={handleClick} label="%" value="%" />
          <Button onClick={handleClick} label="9" value="9" />
          <Button onClick={handleClick} label="6" value="6" />
          <Button onClick={handleClick} label="3" value="3" />
          <Button onClick={handleClick} label="." value="." />

          <Button onClick={handleClick} label="&divide;" value="/" />
          <Button onClick={handleClick} label="x" value="*" />
          <Button onClick={handleClick} label="-" value="-" />
          <Button onClick={handleClick} label="+" value="+" />
          <Button onClick={handleClick} label="=" value="equal" />
        </Buttons>
      </div>
    );
  }
}

export default App;

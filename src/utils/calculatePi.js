import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

class CalculatePi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pi: 3,
      denominator: 2.0,
      steps: 0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(() => {
      this.calculate(), console.log('The calculation is carrying out');
    }, 1000);
  }

  calculate() {
    if (this.state.steps % 2 === 0) {
      this.setState({
        pi:
          this.state.pi +
          4 /
            (this.state.denominator *
              (this.state.denominator + 1) *
              (this.state.denominator + 2)),
        denominator: this.state.denominator + 2,
        steps: this.state.steps + 1,
      });
    } else {
      this.setState({
        pi:
          this.state.pi -
          4 /
            (this.state.denominator *
              (this.state.denominator + 1) *
              (this.state.denominator + 2)),
        denominator: this.state.denominator + 2,
        steps: this.state.steps + 1,
      });
    }
  }

  stop() {
    clearInterval(this.timer);
    console.log('pause called!');
  }

  reset() {
    this.setState({
      pi: 3,
      denominator: 2,
      steps: 0,
    });
    console.log('reset called!');
  }

  // getPi() {
  //   return this.state.pi;
  // }
  // getSteps() {
  //   return this.state.steps;
  // }
  // getDenom() {
  //   return this.state.denominator;
  // }

  render() {
    return (
      <Home
        pi={this.state.pi}
        start={this.start.bind(this)}
        stop={this.stop.bind(this)}
        reset={this.reset.bind(this)}
      />
    );
  }
}
// const Calculator = new CalculatePi();

// export default Calculator;

export default CalculatePi;

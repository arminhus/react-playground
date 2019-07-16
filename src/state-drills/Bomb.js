/*
Make a component called Bomb inside the ./src/state-drills/ 
folder. Update your index.js to use the Bomb component 
to check that it works.
The component should render a div element. Inside 
the div there should be a p that contains content of 
either "tick", "tock" or "BOOM!!!!".
The component will have an initial state with a property 
count of 0.
When the component mounts, register an interval that 
adds one to the count in state every second.
When the component unmounts, clear the interval.
When the count is divisible by 2, display the word "tick".
When the count isn't divisible by 2, display the word "tock".
If the count goes equal to or above 8, display "BOOM!!!!".
When the count goes above or equal to 8, 
also clear the interval!
 */

import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0
  };
  constructor(props) {
    console.log("constructor props", props);
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  renderWillExplode() {
    const { count } = this.state;
    if (count % 2 === 0) {
      return "Tick!";
    } else if (count >= 8) {
      clearInterval(this.interval);
      return "BOOM!";
    } else {
      return "Tock!";
    }
  }

  render() {
    return <div className="Bomb">{this.renderWillExplode()}</div>;
  }
}

export default Bomb;

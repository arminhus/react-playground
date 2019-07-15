import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // fix one to see count in console using constructor binding
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log(this.state.count);
    const newCount = this.state.count + 1;
    console.log(newCount);
    this.setState({
      count: newCount
    });
  }

  handleClearButtonClick = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        {/* fix 2 to see count in console via arrow functions */}
        <button onClick={() => this.handleButtonClick()}>+ 1</button>
        <button onClick={() => this.handleClearButtonClick()}>Clear</button>
      </div>
    );
  }
}

export default Counter;

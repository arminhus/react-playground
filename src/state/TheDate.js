import React from "react";

class TheDate extends React.Component {
  // The component is created.
  constructor(props) {
    super(props);
    this.state = { datetime: new Date() };
    console.log("constructor");
  }
  // The component has been added to the DOM
  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date()
      });
      // console.log("tick");
    }, 1000);
  }
  // The component is about to be removed from the DOM
  // When the parent components render doesn't render this
  // component anymore, the component will be removed.
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }
  // The component is reacting to being created or updated
  // 1 This will happen at least once.
  // 2 if the component props change, render can happen again.
  // 3  if the components state changes, the render can also happen again.
  render() {
    console.log("render");
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;

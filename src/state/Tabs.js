import React from "react";

class Tabs extends React.Component {
  render() {
    const button = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
    return <div>{button}</div>;
  }
}

export default Tabs;

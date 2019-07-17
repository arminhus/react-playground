import React from "react";

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  render() {
    const button = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ));
    const currentTab = this.props.tabs[0];
    return <div className="content">{currentTab.content}</div>;
  }
}

export default Tabs;

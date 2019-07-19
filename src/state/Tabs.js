import React from "react";

class Tabs extends React.Component {
  static defaultProps = {
    tabs: []
  };

  state = {
    currentTabIndex: 0
  };

  handleButtonClick = index => {
    console.log(
      "button clicked",
      {
        index
      },
      {
        currentTabIndex: index
      }
    );
    let number = index.target.getAttribute("data-index");
    console.log(number);

    this.setState({
      currentTabIndex: number
    });
  };
  // undefined

  renderButton() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} data-index={index} onClick={this.handleButtonClick}>
        {" "}
        {tab.name}{" "}
      </button>
    ));
  }

  // renderButton alternative
  // i take this approach
  handleButtonClickAlt(index) {
    console.log("alternative", index);
    this.setState({ currentTabIndex: index });
  }
  renderButtonAlt() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClickAlt(index)}>
        {tab.name}{" "}
      </button>
    ));
  }
  // renderButton alternative

  // BRB gotta go help someon

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    console.log(currentTab);
    return <div className="content"> {currentTab.content} </div>;
  }

  render() {
    return (
      <div>
        {" "}
        {this.renderButton()}
        {/* renderButton alternative */}
        {this.renderButtonAlt()}
        {/* renderButton alternative */}
        {this.props.tabs.length && this.renderContent()}{" "}
      </div>
    );
  }
}

export default Tabs;

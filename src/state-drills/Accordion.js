import React from "react";

import Tab from "./Tabs";
import "./Accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "Section 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          active: true
        },
        {
          title: "Section 2",
          content:
            "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
          active: false
        },
        {
          title: "Section 3",
          content:
            "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
          active: false
        }
      ]
    };

    this.handleTabClick = this.handleTabClick.bind(this);
    this.updateTabs = this.updateTabs.bind(this);
  }

  updateTabs(title) {
    let tabs = this.state.sections;
    let newtabs = tabs.map((tab, index) => {
      if (tab.title == title) {
        if (tab.active == true) {
          tab.active = false;
        } else {
          tab.active = true;
        }
      } else {
        tab.active = false;
      }
      console.log(tab);
      return tab;
    });
    console.log(newtabs);
    return newtabs;
  }

  handleTabClick(title) {
    this.setState({ sections: this.updateTabs(title) });
  }

  render() {
    const secArray = this.state.sections;
    return (
      <div id="accordion">
        {secArray.map((section, index) => {
          console.log(section);
          return (
            <Tab
              title={section.title}
              handleclick={this.handleTabClick}
              content={section.content}
              active={section.active}
            />
          );
        })}
      </div>
    );
  }
}

export default Accordion;

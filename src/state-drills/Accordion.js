import React from "react";

import Tab from "./Tabs";
import "./Accordion.css";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // thoughts
      // since your rendering an array
      // You can use index of each object
      // so I created a state that tracks an index
      activeIndex: 0,
      sections: [
        {
          title: "Section 1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
    // this.updateTabs = this.updateTabs.bind(this);
  }

  // updateTabs(title) {
  //   let tabs = this.state.sections;
  //   let newtabs = tabs.map((tab, index) => {
  //     if (tab.title == title) {
  //       if (tab.active == true) {
  //         tab.active = false;
  //       } else {
  //         tab.active = true;
  //       }
  //     } else {
  //       tab.active = false;
  //     }
  //     console.log(tab);
  //     return tab;
  //   });
  //   console.log(newtabs);
  //   return newtabs;
  // }

  handleTabClick(index) {
    // thoughts
    // so I passed an index as an argument to handle the tracking
    // with the index here I can update the state
    console.log("index", index);
    if (index === this.state.activeIndex) {
      this.setState({ activeIndex: -1 });
    } else {
      this.setState({ activeIndex: index });
    }
  }

  render() {
    const secArray = this.state.sections;
    return (
      <div id="accordion">
        {secArray.map((section, index) => {
          // thoughts
          // so Now I have a local variable that
          // compares the activeIndex state and the index
          // of the object mapped
          // (true or false)
          let active = this.state.activeIndex === index;
          console.log(section);
          return (
            <Tab
              // I added a key to get that error out of the way
              key={section.content}
              title={section.title}
              // I passed the index of the object mapped here
              handleclick={() => this.handleTabClick(index)}
              content={section.content}
              // thoughts
              // give the boolean variable to the active props
              // Look inside Tab.js
              active={active}
            />
          );
        })}
      </div>
    );
  }
}

export default Accordion;

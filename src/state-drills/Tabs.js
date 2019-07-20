import React from "react";

class Tab extends React.Component {
  render() {
    // thoughts
    // here I just created a local active variable
    // if the boolean that is passed here determines show or hide
    // for the className of the content
    let active = this.props.active ? "show" : "hide";
    return (
      <div className="tab">
        <div
          className="title flex"
          // thoughts
          // this onclick can be simplified
          onClick={this.props.handleclick}
        >
          <span>{this.props.title}</span>
        </div>
        {/* thoughts */}
        {/* I used template strings to  */}
        {/* add the local active variable */}
        {/* this helps with readability */}
        <div className={`content ${active}`}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Tab;

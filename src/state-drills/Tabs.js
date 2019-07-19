import React from "react";

class Tab extends React.Component {
  render() {
    return (
      <div className="tab">
        <div
          className="title flex"
          onClick={() => {
            this.props.handleclick(this.props.title);
          }}
        >
          <span>{this.props.title}</span>
        </div>
        <div className={this.props.active ? "content show" : "content hide"}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Tab;

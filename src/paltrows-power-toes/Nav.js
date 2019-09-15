import React, { Component } from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <Content className="Nav">
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/workouts">Workouts</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/workouts">Workouts</Link>
      </Content>
    );
  }
}

import React, { Component } from "react";
import classes from "./Main.module.css";
import { Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <main className={classes.main}>
        <Outlet />
      </main>
    );
  }
}

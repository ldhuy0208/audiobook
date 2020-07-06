import React, { Component } from "react";
import Child from "./Child";

export class Father extends Component {
  render() {
    return (
      <div>
        <h2>Cha</h2>
        <Child />
      </div>
    );
  }
}

export default Father;

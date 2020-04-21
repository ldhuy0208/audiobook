import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import './Layout.css'
export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navigation />
        <main>{this.props.children}</main>
        //footer
      </div>
    );
  }
}

export default Layout;

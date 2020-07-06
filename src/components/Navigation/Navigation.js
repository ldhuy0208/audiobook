import React from "react";
import Logo from "./Logo/Logo";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import "./Navigation.scss";
import { Link, Redirect, withRouter } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      toSearchPage: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  searchHandler = (e) => {
    if (e.key == "Enter") {
      //this.props.history.push("/book/filter?search="+this.state.value);

      this.props.history.push('/home');
      this.props.history.push("/book/filter?search="+this.state.value);
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-bar-left">
          <Logo />
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeHandler}
            placeholder="Nhập vào để tìm kiếm"
            onKeyPress={this.searchHandler}
          />
        </div>
        <NavigationButtons />
      </nav>
    );
  }
}

export default withRouter(Navigation);

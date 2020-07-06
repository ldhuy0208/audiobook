import React, { Component } from "react";
import { connect } from "react-redux";

class ButtonDoiHo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  thayDoiText = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
         <input value={this.state.text} onChange={this.thayDoiText}/>
        <button onClick={() => this.props.doiHo(this.state.text)}>
          Đổi họ
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doiHo: (dongHo) => {
      const action = { type: "DOI_HO", dongHo };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ButtonDoiHo);

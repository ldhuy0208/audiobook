import React, { Component } from 'react'
import Father from './Father'
import { connect } from 'react-redux';
import { configure } from '@testing-library/react';

export class Grand extends Component {
  changeDongHo = (text)=>{
    this.setState({dongHo: text})
  }
  render() {
    return (
      <div>
        <h1>Ông họ {this.props.dongHo}</h1>
        <Father />
      </div>
    )
  }
}

//chưa liên quan dispatch
const mapStateToProps = (state) => {
  return {
    dongHo: state.dongHo,
  };
};

export default connect(mapStateToProps)(Grand)

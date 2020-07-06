import React, { Component } from 'react'
import { connect } from 'react-redux';
import ButtonDoiHo from './ButtonDoiHo';

export class Child extends Component {
  render() {
    return (
      <div>
        <h3>Con, họ {this.props.dongHo}</h3>
      </div>
    )
  }
}
//click => gọi lại doiHo(text);
const mapStateToProps = (state) => {
  return {
    dongHo: state.dongHo,
  };
};


export default connect(mapStateToProps)(Child)

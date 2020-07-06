import React, { Component } from "react";
import ButtonCircle from "../../components/UI/Button/ButtonCircle/ButtonCircle";
import Modal from "../../components/UI/Modal/Modal";
import * as actions from "../../store/actions.js";
import { connect } from "react-redux";
import Axios from "axios";
import { withRouter } from "react-router-dom";

export class ModalDeleteBook extends Component {
  deleteBook = ()=> {
    Axios.delete("http://localhost:8080/api/book?id=" + this.props.selectedDeleteBook.id)
      .then((res) => {
        this.props.removeSelectedDeleteBook();
        return res;
      })
      .catch((err) => alert("Có lỗi xảy ra: "+err));
  }
  render() {
    console.log(this.props);
    return (
      <Modal
        show={this.props.selectedDeleteBook != null}
        close={this.props.removeSelectedDeleteBook} 
      >
        <h2>Xác nhận</h2>
        <span>
          Bạn có muốn xóa sách "
          {this.props.selectedDeleteBook && this.props.selectedDeleteBook.title}
          " không?
        </span>
        <div className="modal-footer">
          <ButtonCircle addclass="button-danger" onClick={this.deleteBook}>
            Xóa
          </ButtonCircle>
          <ButtonCircle onClick={this.props.removeSelectedDeleteBook}>
            Hủy
          </ButtonCircle>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedDeleteBook: state.selectedDeleteBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSelectedDeleteBook: () =>
      dispatch({ type: actions.SELECT_DELETE_BOOK, book: null }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalDeleteBook));

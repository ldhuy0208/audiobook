import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import ButtonCircle from "../../components/UI/Button/ButtonCircle/ButtonCircle";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class ModalAddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      orderNumber: 1,
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    const category = {
      title: this.state.title,
      orderNumber: this.state.orderNumber,
    };
    Axios.post("http://localhost:8080/api/category", category)
      .then(res=>{
        this.props.close();
        this.props.history.push("/all-category");
      })
      .catch((err) => alert("Đã xảy ra lỗi: " + err));
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Modal show={this.props.isShow} close={this.props.close}>
        <h2>Thêm danh mục</h2>
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="title"
            value={this.state.title}
            onChange={this.onChangeHandler}
            placeholder="Tên danh mục"
          />
          <Input
            name="orderNumber"
            value={this.state.orderNumber}
            onChange={this.onChangeHandler}
            placeholder="Thứ tự"
          />
          <div className="modal-footer">
            <ButtonCircle type="submit" addclass="button-success">
              Xác nhận
            </ButtonCircle>
            <ButtonCircle type="button" onClick={this.props.close}>
              Hủy
            </ButtonCircle>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.isAddCategoryModalShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch({ type: actions.TOGGLE_ADD_CATEGORY_MODAL }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalAddCategory));

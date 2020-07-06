import React, { Component, Fragment } from "react";
import BackDrop from "../../components/UI/BackDrop/BackDrop";
import Modal from "../../components/UI/Modal/Modal";
import ButtonCircle from "../../components/UI/Button/ButtonCircle/ButtonCircle";
import Input from "../../components/UI/Input/Input";
import "./ModalLogin.scss";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class ModalLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      notification: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onsubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/account", {
        id: this.state.username,
        password: this.state.password,
      })
      .then((account) => {
        if (account.data != "") {
          this.props.login(account.data);
          this.setState({
            notification: "",
          });
        } else {
          this.setState({
            notification: "Sai tên đăng nhập hoặc mật khẩu",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Modal
        show={this.props.isLoginModalShow}
        close={this.props.toggleLoginModal}
      >
        <div className="modal-login">
          <form onSubmit={this.onsubmitHandler}>
            <h2>Đăng nhập</h2>
            <span className="notification">
              {this.state.notification || " "}
            </span>
            <Input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.onChangeHandler}
              placeholder="Tên đăng nhập"
            />
            <Input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.onChangeHandler}
              placeholder="Mật khẩu"
            />
            <ButtonCircle addclass={"button-success"}>Đăng nhập</ButtonCircle>
            <a href="">Chưa có tài khoản? Nhấn vào đây để đăng ký</a>
          </form>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginModalShow: state.isLoginModalShow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoginModal: () => dispatch({ type: actions.TOGGLE_LOGIN_MODAL }),
    login: (account) => dispatch({ type: actions.SET_ACCOUNT, account }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);

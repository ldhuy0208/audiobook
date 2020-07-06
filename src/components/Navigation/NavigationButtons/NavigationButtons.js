import React from "react";
import "./NavigationButtons.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import AvatarAccount from "../../UI/AvatarAccount/AvatarAccount";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import ButtonCircle from "../../UI/Button/ButtonCircle/ButtonCircle";
import { FacebookProvider, LoginButton } from "react-facebook";

class NavigationButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginModalShow: false,
    };
  }

  toggleLoginModal = () => {
    this.setState({ isLoginModalShow: !this.state.isLoginModalShow });
  };
  handleResponse = (res) => {
    console.log(res);
    this.props.setAccount({
      name: res.profile.name,
      avatar: res.profile.picture.data.url,
    });
    this.toggleLoginModal();
  };

  handleError = (error) => {
    console.log(error);
  };
  render() {
    return (
      <div className="navigation-buttons">
        <Link to="/home">Trang chủ</Link>
        <Link to="/all-category">Danh mục</Link>
        <a href="#">Liên hệ</a>
        {this.props.account ? (
          <AvatarAccount account={this.props.account} />
        ) : (
          <button onClick={this.toggleLoginModal}>Đăng nhập</button>
        )}
        <Modal show={this.state.isLoginModalShow} close={this.toggleLoginModal}>
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
            </form>
            <span className="login-via-facebook">
              <FacebookProvider appId="559197728086503">
                <LoginButton
                  scope="email"
                  onCompleted={this.handleResponse}
                  onError={this.handleError}
                >
                  <span><i class="fab fa-facebook"></i></span>
                </LoginButton>
              </FacebookProvider>
            </span>
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoginModal: () => dispatch({ type: actions.TOGGLE_LOGIN_MODAL }),
    setAccount: (account) => dispatch({ type: actions.SET_ACCOUNT, account }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtons);

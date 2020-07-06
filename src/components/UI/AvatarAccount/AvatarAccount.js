import React, { Fragment } from "react";
import "./AvatarAccount.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

function AvatarAccount(props) {
  return (
    <div className="avatar-account">
      <img src={props.account.avatar}></img>
      <span className="avatar-dropdown">{props.account.name}</span>
      <div className="dropdown-content">
        
        <button onClick={props.logout}>Đăng xuất</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: actions.SET_ACCOUNT, account: null }),
    toggleAddBookModal: () => dispatch({ type: actions.TOGGLE_ADD_BOOK_MODAL }),
    toggleAddCategoryModal: () =>
      dispatch({ type: actions.TOGGLE_ADD_CATEGORY_MODAL }),
  };
};

export default connect(null, mapDispatchToProps)(AvatarAccount);

import React, { Component } from "react";
import './UpdatePassword.scss'
export class UpdatePassword extends Component {
  render() {
    return (
      <div className="admin-update-password">
        <h2>Đổi mật khẩu</h2>
        <div>
          <span>Mật khẩu cũ</span>
          <input type="text"/>
        </div>
        <div>
          <span>Mật khẩu mới</span>
          <input type="text"/>
        </div>
        <div>
          <span>Nhập lại mật khẩu mới</span>
          <input type="text"/>
        </div>
        <button>Đổi mật khẩu</button>
      </div>
    );
  }
}

export default UpdatePassword;

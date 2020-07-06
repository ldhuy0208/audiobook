import React, { Component } from 'react'
import './AccountInfo.scss'

export class Account extends Component {
  render() {
    return (
      <div className="account-info">
        <h2>Thông tin cá nhân</h2>
        <div>
          <span>Họ tên</span>
          <input type="text"/>
        </div>
        <div>
          <span>Ngày sinh</span>
          <input type="date"/>
        </div>
        <div>
          <span>Giới tính</span>
          <select>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>
        </div>
        <button>Cập nhật thông tin</button>
        
        <div>
          <span>Mật khẩu cũ</span>
          <input type="password"/>
        </div>
        <div>
          <span>Mật khẩu mới</span>
          <input type="password"/>
        </div>
        <div>
          <span>Xác nhận mật khẩu mới</span>
          <input type="password"/>
        </div>
        <button>Đổi mật khẩu</button>
      </div>
    )
  }
}

export default Account

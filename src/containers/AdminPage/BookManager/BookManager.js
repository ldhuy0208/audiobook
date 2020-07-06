import React, { Component } from "react";
import Modal from "../../../components/UI/Modal/Modal";
import "./BookManager.scss";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import { ModalAddBook } from "./ModalAddBook/ModalAddBook";
import Axios from "axios";
export class BookManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalAddShow: false,
      books: [],
    };
  }

  toggleModalAdd = () => {
    this.setState({
      isModalAddShow: !this.state.isModalAddShow,
    });
  };

  updateBooks = () => {
    Axios.get("http://localhost:5000/api/books")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => alert(err));
  }

  componentDidMount() {
    this.updateBooks();
  }
  render() {
    return (
      <div className="book-manager">
        <div className="book-manager-table">
          <div className="top-header">
            <h3>Danh sách các sách</h3>
            <button onClick={this.toggleModalAdd}>Thêm sách</button>
          </div>
          <table>
            <thead>
              <tr className="header">
                <th className="book-manager-checkbox"></th>
                <th>Ảnh bìa</th>
                <th className="book-manager-title">Tựa đề</th>
                <th className="book-manager-author">Tác giả</th>
                <th className="book-manager-publish-year">Năm xuất bản</th>
                <th className="book-manager-introduction">Giới thiệu</th>
                <th className="book-manager-post-date">Ngày đăng</th>
                <th className="book-manager-update-date">Ngày cập nhật</th>
                <th className="book-manager-update-date">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr key={book._id}>
                  <td className="book-manager-checkbox">
                    <input type="checkbox"></input>
                  </td>
                  <td className="book-manager-avatar">
                    <img src={book.avatar} />
                  </td>
                  <td className="book-manager-title">{book.title}</td>
                  <td className="book-manager-author">{book.author}</td>
                  <td className="book-manager-publish-year">
                    {book.publishYear}
                  </td>
                  <td className="book-manager-introduction">
                    {book.introduction.length > 50 ? book.introduction.substring(0, 59)+'...' : book.introduction}
                  </td>
                  <td className="book-manager-post-date">{new Date(book.createdAt).toDateString()}</td>
                  <td className="book-manager-update-date">
                    {new Date(book.updatedAt).toDateString()}
                  </td>
                  <td className="book-manager-edit">
                    <button>Chỉnh sửa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="book-manager-delete">Xóa mục đã chọn</button>
          <ModalAddBook
            show={this.state.isModalAddShow}
            close={this.toggleModalAdd}
            updateBooks={this.updateBooks}
          />
        </div>
      </div>
    );
  }
}

export default BookManager;

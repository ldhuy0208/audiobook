import React, { Component } from "react";
import BookList from "../../components/BookList/BookList";
import axios from "axios";
import TitleWithLineBottom from "../../components/UI/TitleWithLineBottom/TitleWithLineBottom";
import { Link } from "react-router-dom";
import "./BookListPage.scss";
import Slider from "react-slick";
class BookListBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      newBooks: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((err) => alert(err.message));
    axios
      .get("http://localhost:5000/api/books?limit=5&sortBy=createdAt:desc")
      .then((res) => {
        this.setState({ newBooks: res.data });
      })
      .catch((err) => alert("Lỗi, " + err.message));
  }

  render() {
    return (
      <section className="book-list-page">
        <div>
          <TitleWithLineBottom>Sách mới cập nhật</TitleWithLineBottom>
          <BookList bookList={this.state.newBooks} />
        </div>
        {this.state.categories.map((cate) => {
          return (
            <div key={cate._id}>
              {cate.books.length > 0 && (
                <Link to={"/category/" + cate._id}>
                  <TitleWithLineBottom>{cate.title}</TitleWithLineBottom>
                </Link>
              )}
              <BookList key={cate._id} bookList={cate.books} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default BookListBuilder;

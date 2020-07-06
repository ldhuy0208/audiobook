import React, { Component, Children } from "react";
import BookList from "../../components/BookList/BookList";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import TitleWithLineBottom from "../../components/UI/TitleWithLineBottom/TitleWithLineBottom";
import "./CategoryPage.scss";
export class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        title: "",
        books: [],
      },
    };
  }

  componentDidMount() {
    Axios.get(
      "http://localhost:5000/api/categories/" + this.props.match.params.id
    )
      .then((cate) => this.setState({ category: cate.data }))
      .catch((err) => alert("Có lỗi xảy ra: " + err.message));
  }
  render() {
    console.log(this.state.category)
    return (
      <section className="category-page">
        <TitleWithLineBottom>
          Danh mục: {this.state.category.title}
        </TitleWithLineBottom>
        <BookList bookList={this.state.category.books} />
      </section>
    );
  }
}

export default withRouter(CategoryPage);

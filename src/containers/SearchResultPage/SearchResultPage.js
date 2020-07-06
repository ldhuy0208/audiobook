import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TitleWithLineBottom from "../../components/UI/TitleWithLineBottom/TitleWithLineBottom";
import Axios from "axios";
import BookList from "../../components/BookList/BookList";
import "./SearchResultPage.scss";
export class SearchResultPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const searchKey = new URLSearchParams(this.props.location.search).get(
      "search"
    );
    Axios.get("http://localhost:5000/api/books?searchKey=" + searchKey)
      .then((books) => this.setState({ books: books.data }))
      .catch((err) => "Có lỗi xảy ra: " + err);
  }


  componentDidUpdate(){
    const searchKey = new URLSearchParams(this.props.location.search).get(
      "search"
    );
    Axios.get("http://localhost:5000/api/books?searchKey=" + searchKey)
      .then((books) => this.setState({ books: books.data }))
      .catch((err) => "Có lỗi xảy ra: " + err);
  }
  render() {
    const searchKey = new URLSearchParams(this.props.location.search).get(
      "search"
    );
    return (
      <section className="search-result-page">
        <TitleWithLineBottom>
          Kết quả tìm kiếm cho: {searchKey}
        </TitleWithLineBottom>
        <BookList bookList={this.state.books} />
      </section>
    );
    //<BookList bookList={this.state.bookList} />
  }
}

export default withRouter(SearchResultPage);

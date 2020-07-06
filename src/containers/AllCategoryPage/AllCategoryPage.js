import React, { Component } from "react";
import Axios from "axios";
import "./AllCategoryPage.scss";
import TitleWithLineBottom from "../../components/UI/TitleWithLineBottom/TitleWithLineBottom";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
export class AllCategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/categories").then((res) =>
      this.setState({ categories: res.data })
    );
  }
  render() {
    return (
      <section className="all-category-box">
        <TitleWithLineBottom>Tất cả danh mục</TitleWithLineBottom>
        <div className="all-category">
          {this.state.categories.map((cate) => (
            <Link key={cate.id} to={"category/" + cate._id}>
              <CategoryItem>{cate.title}</CategoryItem>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

export default AllCategoryPage;

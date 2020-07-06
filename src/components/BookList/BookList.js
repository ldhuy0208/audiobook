import React from "react";
import "./BookList.scss";
import { Link } from "react-router-dom";
import ButtonCircle from "../UI/Button/ButtonCircle/ButtonCircle";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BookList(props) {
  const { account, bookList } = props;
  console.log(bookList);
  if (bookList.length === 0) return null;
  return (
    <div className="book-list">

      {bookList.map((book) => {
        return (
          <div key={book._id}>
            <div className="book">
              <Link to={`/book/${book._id}`}>
                <div className="layer-class"></div>
                <img src={book.avatar} />

                <span className="book-title">{book.title}</span>
              </Link>
            </div>
            {/* <div>
              {account != null && account.role.id == 1 && (
                <div className="book-control-group">
                  <ButtonCircle addclass="button-success">
                    Chỉnh sửa
                  </ButtonCircle>
                  <ButtonCircle
                    addclass="button-danger"
                    onClick={() => props.selectDeleteBook(book)}
                  >
                    Xóa
                  </ButtonCircle>
                </div>
              )}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDeleteBook: (book) =>
      dispatch({ type: actions.SELECT_DELETE_BOOK, book }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

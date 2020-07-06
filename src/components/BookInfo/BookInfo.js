import React from "react";
import "./BookInfo.scss";
import TitleWithLineBottom from "../UI/TitleWithLineBottom/TitleWithLineBottom";

function BookInfo(props) {
  const {
    id,
    title,
    author,
    avatar,
    introduction,
    publishYear,
    updatedAt,
    createdAt,
  } = props.book;
  const parsedUpdateDate = new Date(updatedAt);
  const parsedPostDate = new Date(createdAt);
  return (
    <div className="book-info-box">
      
      <div className="book-info">
        <div className="detail-info">
          <div>
            <b>Tác giả: </b>
            <span>{author}</span>
          </div>
          <div>
            <b>Năm xuất bản: </b>
            <span>{publishYear}</span>
          </div>
          <div>
            <b>Ngày cập nhật: </b>
            <span>{parsedUpdateDate.toDateString()}</span>
          </div>
          <div>
            <b>Ngày tạo: </b>
            <span>{parsedPostDate.toDateString()}</span>
          </div>
        </div>
        <div className="book-intro">
          <p>{introduction}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;

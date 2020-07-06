import React, { Component, Fragment } from "react";
import PlayerControl from "../../components/Player/PlayerControl/PlayerControl";
import BookInfo from "../../components/BookInfo/BookInfo";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ListPlayer from "../../components/Player/ListPlayer/ListPlayer";
import "./PlayerPage.scss";
import TitleWithLineBottom from "../../components/UI/TitleWithLineBottom/TitleWithLineBottom";
import { FacebookProvider, Comments } from "react-facebook";
import BookList from "../../components/BookList/BookList";

export class PlayerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
      relatedBooks: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("http://localhost:5000/api/books/" + this.props.match.params.id)
      .then((book) =>
        this.setState({
          book: book.data,
        })
      );
    await axios
      .get(
        "http://localhost:5000/api/categories/" +
          this.state.book.categories[0] +
          "?limit=0"
      )
      .then((res) => {
        this.setState({
          relatedBooks: res.data.books,
        });
      })
      .catch((err) => alert("Lỗi: " + err.message));
  }

  render() {
    if (this.state.book == null) return null;
    let audioLink = "";
    let audioId = new URLSearchParams(this.props.location.search).get(
      "audioId"
    );
    if (this.state.book.audios) {
      if (audioId)
        audioLink = this.state.book.audios.find(
          (audio) => audio._id === audioId
        ).url;
      else {
        audioId = this.state.book.audios[0]._id;
        audioLink = this.state.book.audios[0].url;
      }
    }
    return (
      <Fragment>
        <section className="audio-player-page">
          <div className="player">
            <div className="player-left">
              <div className="title">
                <span className="avatar">
                  <img src={this.state.book.avatar} />
                </span>
                <div>
                  <h1>{this.state.book.title}</h1>
                  <div className="detail-info">
                    <div>
                      <b>Tác giả: </b>
                      <span>{this.state.book.author}</span>
                    </div>
                    <div>
                      <b>Năm xuất bản: </b>
                      <span>{this.state.book.publishYear}</span>
                    </div>
                    <div>
                      <b>Ngày cập nhật: </b>
                      <span>
                        {new Date(this.state.book.updatedAt).toDateString()}
                      </span>
                    </div>
                    <div>
                      <b>Ngày tạo: </b>
                      <span>
                        {new Date(this.state.book.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="player-box">
                <PlayerControl audioLink={audioLink} />
              </div>
            </div>
            <div className="player-right">
              <h2>Danh sách phát</h2>
              <ListPlayer
                playingId={audioId ? audioId : 0}
                listAudio={this.state.book.audios}
              />
            </div>
          </div>
          {/* <BookInfo book={this.state.book} /> */}
          <div className="intro">
            <h2>Giới thiệu</h2>
            <p>{this.state.book.introduction}</p>
          </div>
          <div className="comment">
            <h2>Bình luận</h2>
            <div className="fb-provider">
              <FacebookProvider appId="559197728086503">
                <Comments href={window.location.href.split("?")[0]} />
              </FacebookProvider>
            </div>
          </div>
          <div className="related-book">
            <h2>Sách cùng thể loại</h2>
            <BookList bookList={this.state.relatedBooks} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(PlayerPage);

import React, { Component } from "react";
import Modal from "../../../../components/UI/Modal/Modal";
import Input from "../../../../components/UI/Input/Input";
import ButtonCircle from "../../../../components/UI/Button/ButtonCircle/ButtonCircle";
import axios from "axios";
import * as actions from "../../../../store/actions";
import { connect } from "react-redux";
import "./ModalAddBook.scss";
import { withRouter } from "react-router-dom";
export class ModalAddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      publishYear: 2020,
      introduction: "",
      avatar: null,
      listCategory: [],
      selectedCategoryIds: [],
      audioItems: [],
    };
  }

  changeAvatarHandler = (e) => {
    this.setState({
      avatar: e.target.files[0],
    });

    console.log(e.target.files[0]);
  };

  changeValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    const formDataAvatar = new FormData();
    formDataAvatar.append("avatar", this.state.avatar);

    // formData.append("title", this.state.title);
    // formData.append("author", this.state.author);
    // formData.append("publishYear", this.state.publishYear);
    // formData.append("introduction", this.state.introduction);
    const formDataAudios = new FormData();
    

    for (let i = 0; i<this.state.audioItems.length; i++) {
      formDataAudios.append("audios", this.state.audioItems[i].file);
      formDataAudios.append("titles", this.state.audioItems[i].title);
    }

    // axios
    //   .post("http://localhost:5000/api/books", formData)
    //   .then((res) => {
    //     this.props.toggleAddModal();
    //     this.props.history.push("/book/" + res.data.id);
    //   })
    //   .catch((err) => alert("Có lỗi xảy ra: " + err));

    console.log("hello");
    axios
      .post("http://localhost:5000/api/books", {
        title: this.state.title,
        author: this.state.author,
        introduction: this.state.introduction,
        publishYear: this.state.publishYear,
        categories: this.state.selectedCategoryIds,
      })
      .then((res) =>{
        console.log(res.data);
        axios.post(`http://localhost:5000/api/books/${res.data._id}/upload/avatar`, formDataAvatar)
          .then(res=>{
            
            axios.post(`http://localhost:5000/api/books/${res.data._id}/upload/audio`, formDataAudios)
              .then(res=>{
                this.props.updateBooks();
                this.props.close();

              })
              .catch(err=>alert("Không thể thêm audio", err))
          })
          .catch(err=>{
            alert("Không thể thêm avatar", err);
          })
      })
      .catch((err) => alert("Không thể thêm sách ", err));
  };

  checkboxClickHandler = (e) => {
    let update = [...this.state.selectedCategoryIds];
    if (e.target.checked) update.push(e.target.id);
    else update = update.filter((ele) => ele !== e.target.id);
    this.setState({
      selectedCategoryIds: update,
    });
    console.log(this.state.selectedCategoryIds);
  };

  addAudioItem = (e) => {
    let newAu = [...this.state.audioItems];
    newAu.push({
      id: new Date().getTime(),
      title: "",
      file: null,
    });

    this.setState({
      audioItems: newAu,
    });
  };

  onChangeTitleAudio = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    const updateAudioItems = this.state.audioItems.map((au) =>
      au.id == name
        ? {
            ...au,
            title: value,
          }
        : au
    );
    this.setState({ audioItems: updateAudioItems });
  };

  onChangeAudioHandler = (e) => {
    const { files, name } = e.target;
    const updateAudioItems = this.state.audioItems.map((au) =>
      au.id == name
        ? {
            ...au,
            file: files[0],
          }
        : au
    );
    console.log(updateAudioItems);
    this.setState({ audioItems: updateAudioItems });
  };
  onDeleteAudioItem = (e) => {
    const { name } = e.target;
    const updateAudioItems = this.state.audioItems.filter(
      (au) => au.id != name
    );
    this.setState({ audioItems: updateAudioItems });
  };
  componentDidMount = ()=> {
    axios
    .get("http://localhost:5000/api/categories?sortBy=orderNumber")
    .then((categories) => this.setState({ listCategory: categories.data }))
    .catch((error) => alert("Lỗi " + error));
  }

  render() {
    return (
      <Modal show={this.props.show} close={this.props.close}>
        <h2>Thêm sách mới</h2>
        <form className="add-book-modal" onSubmit={this.onSubmitHandler}>
          <Input
            required
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Tựa đề"
            onChange={this.changeValueHandler}
          />
          <Input
            required
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Tác giả"
            onChange={this.changeValueHandler}
          />
          <Input
            required
            type="number"
            name="publishYear"
            value={this.state.publishYear}
            placeholder="Năm xuất bản"
            onChange={this.changeValueHandler}
          />
          <div className="input-box">
            <textarea
              required
              className="input-normal"
              type="text"
              name="introduction"
              value={this.state.introduction}
              placeholder="Giới thiệu"
              onChange={this.changeValueHandler}
            />
          </div>
          <Input
            id="book-avatar"
            type="file"
            name="avatar"
            onChange={this.changeAvatarHandler}
            label={
              this.state.avatar == null ? (
                <>
                  <i className="fas fa-image"></i>Chọn ảnh đại diện
                </>
              ) : (
                "Ảnh đại diện: " + this.state.avatar.name
              )
            }
            style={{ display: "none" }}
          />

          <label className="title-in-form">Chọn danh mục</label>
          <div className="categories-in-add-book">
            {this.state.listCategory.map((cate) => (
              <Input
                key={cate._id}
                id={cate._id}
                type="checkbox"
                label={cate.title}
                onClick={this.checkboxClickHandler}
              />
            ))}
          </div>

          <div className="add-audio">
            <div>
              <label className="title-in-form">Thêm file audio</label>
              <button type="button" onClick={this.addAudioItem}>
                +
              </button>
            </div>
            <div className="audio-items">
              {this.state.audioItems.map((au, index) => {
                return (
                  <div key={au.id} className="audio-item">
                    <span>{index + 1}. </span>
                    <Input
                      required
                      name={au.id}
                      type="text"
                      value={au.title}
                      placeholder="Tên chương"
                      onChange={this.onChangeTitleAudio}
                    />
                    <input
                      required
                      type="file"
                      name={au.id}
                      onChange={this.onChangeAudioHandler}
                    />
                    <button
                      name={au.id}
                      className="delete-audio-button"
                      type="button"
                      onClick={this.onDeleteAudioItem}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="modal-footer">
            <ButtonCircle type="submit" addclass="button-success">
              Thêm sách
            </ButtonCircle>
            <ButtonCircle
              type="button"
              addclass="button-danger"
              onClick={this.props.close}
            >
              Đóng
            </ButtonCircle>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAddModalShow: state.isAddBookModalShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddModal: () => dispatch({ type: actions.TOGGLE_ADD_BOOK_MODAL }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ModalAddBook));

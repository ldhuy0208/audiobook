import React, { Component } from "react";
import CategoryRow from "./CategoryRow/CategoryRow";
import "./CategoryManager.scss";
import Modal from "../../../components/UI/Modal/Modal";
import Axios from "axios";

class CategoryManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalAddShow: false,
      isModalEditShow: false,
      isModalDeleteShow: false,

      categories: [],

      categoryAdd: {
        title: "",
        orderNumber: 0,
      },

      categoryEdit: {
        _id: "",
        title: "",
        orderNumber: null,
      },
    };
  }

  toggleModalAdd = () => {
    this.setState({
      isModalAddShow: !this.state.isModalAddShow,
    });
  };

  toggleModalEdit = (category) => {
    const temp = {
      isModalEditShow: !this.state.isModalEditShow,
    };
    if (category) temp.categoryEdit = category;

    this.setState(temp);
  };

  componentDidMount() {
    this.updateCategories();
  }

  updateCategories = () => {
    Axios.get("http://localhost:5000/api/categories", {
      params: {
        sortBy: "orderNumber",
      },
    })
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  addHandler = () => {
    console.log(
      this.state.categoryAdd.title,
      this.state.categoryAdd.orderNumber
    );
    Axios.post("http://localhost:5000/api/categories", {
      title: this.state.categoryAdd.title,
      orderNumber: this.state.categoryAdd.orderNumber,
    })
      .then((res) => {
        this.updateCategories();
        this.toggleModalAdd();
      })
      .catch((err) => console.log(err));
  };
  onChangeHandler = (e) => {
    this.setState({
      categoryAdd: {
        ...this.state.categoryAdd,
        [e.target.name]: e.target.value,
      },
    });
  };

  onChangeModalEditHandler = (e) => {
    this.setState({
      categoryEdit: {
        ...this.state.categoryEdit,
        [e.target.name]: e.target.value,
      },
    });
  };

  onEditClickHandler = () => {
    Axios.patch(
      `http://localhost:5000/api/categories/${this.state.categoryEdit._id}`,
      {
        title: this.state.categoryEdit.title,
        orderNumber: this.state.categoryEdit.orderNumber,
      }
    )
      .then((res) => {
        this.updateCategories();
        this.toggleModalEdit();
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="category-manager">
        <div className="category-manager-table">
          <div className="top-header">
            <h3>Danh sách danh mục</h3>
            <button onClick={this.toggleModalAdd}>Tạo danh mục</button>
          </div>
          <ul className="header">
            <li className="category-manager-checkbox"></li>
            <li className="category-manager-title">Tựa đề</li>
            <li className="category-manager-order-number">Số thứ tự</li>
            <li className="category-manager-edit">Chỉnh sửa</li>
          </ul>

          {this.state.categories.map((cate) => (
            <ul key={cate._id}>
              <li className="category-manager-checkbox">
                <input type="checkbox"></input>
              </li>
              <li className="category-manager-title">{cate.title}</li>
              <li className="category-manager-order-number">
                {cate.orderNumber}
              </li>
              <li className="category-manager-edit">
                <button
                  onClick={() =>
                    this.toggleModalEdit({
                      _id: cate._id,
                      title: cate.title,
                      orderNumber: cate.orderNumber,
                    })
                  }
                >
                  Chỉnh sửa
                </button>
              </li>
            </ul>
          ))}
          <button
            className="category-manager-delete"
            onClick={this.toggleModalAdd}
          >
            Xóa mục đã chọn
          </button>
          <Modal show={this.state.isModalAddShow} close={this.toggleModalAdd}>
            <div className="category-add-modal">
              <div className="modal-header">Thêm danh mục</div>
              <span>
                <label>Tên danh mục</label>
                <input
                  name="title"
                  type="text"
                  required
                  value={this.state.categoryAdd.title}
                  onChange={this.onChangeHandler}
                />
              </span>
              <span>
                <label>Số thứ tự</label>
                <input
                  name="orderNumber"
                  type="number"
                  required
                  value={this.state.categoryAdd.orderNumber}
                  onChange={this.onChangeHandler}
                />
              </span>
            </div>
            <div className="modal-footer">
              <button className="add-modal-button" onClick={this.addHandler}>
                Thêm
              </button>
              <button
                className="close-modal-button"
                onClick={this.toggleModalAdd}
              >
                Đóng
              </button>
            </div>
          </Modal>

          {/** edit modal */}
          <Modal show={this.state.isModalEditShow} close={this.toggleModalEdit}>
            <div className="category-add-modal">
              <div className="modal-header">Chỉnh sửa danh mục</div>
              <span>
                <label>Tên danh mục</label>
                <input
                  name="title"
                  required
                  type="text"
                  value={this.state.categoryEdit.title}
                  onChange={this.onChangeModalEditHandler}
                />
              </span>
              <span>
                <label>Số thứ tự</label>
                <input
                  name="orderNumber"
                  type="number"
                  required
                  value={this.state.categoryEdit.orderNumber}
                  onChange={this.onChangeModalEditHandler}
                />
              </span>
            </div>
            <div className="modal-footer">
              <button
                className="edit-modal-button"
                onClick={this.onEditClickHandler}
              >
                Chỉnh sửa
              </button>
              <button
                className="close-modal-button"
                onClick={this.toggleModalEdit}
              >
                Đóng
              </button>
            </div>
          </Modal>
          <Modal show={this.state.isModalDeleteShow}>
            <div className="category-add-modal">
              <div className="modal-header">Xóa danh mục</div>
              <span>Bạn có muốn xóa 1 mục đã chọn không!</span>
              <div className="modal-footer">
                <button className="delete-modal-button">Xóa</button>
                <button className="close-modal-button">Đóng</button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CategoryManager;

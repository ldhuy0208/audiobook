import React from "react";
import "./AdminPage.scss";
import AdminNavButton from "../../components/AdminNavButton/AdminNavButton";
import { Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import CategoryManager from "./CategoryManager/CategoryManager";
import BookManager from "./BookManager/BookManager";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import Statistic from "./Statistic/Statistic";

export default function AdminPage() {
  return (
    <div className="admin">
      <div className="admin-left-nav">
        <div className="admin-logo">
          <h1>AUBOOK</h1>
          <span>Admin</span>
        </div>
        <NavLink to="/admin/statistic">
          <AdminNavButton label="Thống kê" />
        </NavLink>
        <NavLink to="/admin/category-manager">
          <AdminNavButton label="Quản lý danh mục" />
        </NavLink>
        <NavLink to="/admin/book-manager">
          <AdminNavButton label="Quản lý sách" />
        </NavLink>
        <NavLink to="/admin/update-password">
          <AdminNavButton label="Đổi mật khẩu" />
        </NavLink>
      </div>
      <div className="admin-content">
        <Switch>
          <Route path="/admin/statistic"><Statistic/></Route>
          <Route path="/admin/category-manager"><CategoryManager/></Route>
          <Route path="/admin/book-manager"><BookManager/></Route>
          <Route path="/admin/update-password"><UpdatePassword/></Route>
          <Route path="/admin">
            <Redirect to="/admin/statistic" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

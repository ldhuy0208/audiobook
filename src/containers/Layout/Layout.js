import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.css";
import Footer from "../../components/Footer/Footer";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookListPage from "../BookListPage/BookListPage";
import PlayerPage from "../PlayerPage/PlayerPage";
import AllCategoryPage from "../AllCategoryPage/AllCategoryPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import SearchResultPage from "../SearchResultPage/SearchResultPage";
import AdminPage from "../AdminPage/AdminPage";
import AccountInfo from '../AccountInfo/AccountInfo'
import FacebookLoginButton from "../../components/FacebookLoginButton/FacebookLoginButton";

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Switch>
          <Route path={"/admin"}>
            <AdminPage />
          </Route>
          <Route path={"/"}>
            <Navigation />
            <Route path={"/home"}>
              <Header />
            </Route>
            <main id="main">
              <Switch>
                <Route path={"/home"}>
                  <BookListPage />
                </Route>
                <Route path={"/book/filter"}>
                  <SearchResultPage />
                </Route>
                <Route path={"/book/:id"}>
                  <PlayerPage />
                </Route>
                <Route path={"/all-category"}>
                  <AllCategoryPage />
                </Route>
                <Route path={"/category/:id"}>
                  <CategoryPage />
                </Route>
                <Route path={"/account-info"}>
                  <AccountInfo/>
                </Route>
                <Route path={"/"} exact>
                  <Redirect to={"/home"} />
                </Route>
              </Switch>
            </main>
            <Footer />

            {/* <ModalLogin />
            <ModalAddBook />
            <ModalDeleteBook />
            <ModalAddCategory /> */}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Layout;

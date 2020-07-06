import * as actionTypes from "./actions";
import { act } from "react-dom/test-utils";

const initialState = {
  account: null,
  selectedDeleteBook: null,
  searchKey: '',
  dongHo: 'Lê'
};

//khi dispatch đc chạy, reducer sẽ được gọi reducer(state, action);
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOI_HO':
      return {//state redux cũ sẽ đc gán vs object đc return về
        ...state,
        dongHo: action.dongHo
      }
    case actionTypes.TOGGLE_ADD_CATEGORY_MODAL:
      return {
        ...state,
        isAddCategoryModalShow: !state.isAddCategoryModalShow,
      };

    case actionTypes.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalShow: !state.isLoginModalShow,
      };

    case actionTypes.TOGGLE_ADD_BOOK_MODAL:
      return {
        ...state,
        isAddBookModalShow: !state.isAddBookModalShow,
      };
    case actionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.account,
      };
    case actionTypes.SELECT_DELETE_BOOK:
      return {
        ...state,
        selectedDeleteBook: action.book,
      };
    default:
      return state;
  }
};

export default reducer;

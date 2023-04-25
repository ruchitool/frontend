
import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  first_name: null,
  last_name: null,
  user_id: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, first_name: action.first_name, last_name: action.last_name, user_id: action.user_id};
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, userData: [] };
    case 'REVIEW':
      return { ...state, place_id: action.place_id}
    default:
      return state;
  }
};

const store = createStore(loginReducer);

export default store;

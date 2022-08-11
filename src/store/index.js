import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  location: { city: "Irvine", state: "CA", zip: "92604" },
  favorites: [],
  user: {}
};

const appReducer = (state = initialState, action) => {
  if (action.type === "favorites") {
    return {
      isLoggedIn: state.isLoggedIn,
      location: state.location,
      favorites: action.favorites,
      user: state.user,
    };
  }

  if (action.type === "location") {
    return {
      isLoggedIn: state.isLoggedIn,
      location: action.location,
      favorites: state.favorites,
      user: state.user,
    };
  }

  if (action.type === "login") {
    return {
      isLoggedIn: action.isLoggedIn,
      location: state.location,
      favorites: state.favorites,
      user: action.user,
    };
  }

  if (action.type === "register") {
    return {
      isLoggedIn: state.isLoggedIn,
      location: state.location,
      favorites: state.favorites,
      user: action.user,
    };
  }

  return state;
};

const store = createStore(appReducer);

export default store;

import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

//TODO: Migrate to redux and use typescript.

const initialState = {
  user: null,
};

if (typeof window !== "undefined") {
  if (localStorage.getItem("jwtToken")) {
    const decodeToken = jwtDecode(localStorage.getItem("jwtToken"));
    if (decodeToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
    } else {
      initialState.user = decodeToken;
    }
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    const user = jwtDecode(userData);
    console.log(user);
    localStorage.setItem("jwtToken", userData);
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };

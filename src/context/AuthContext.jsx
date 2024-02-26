import { createContext, useEffect, useReducer } from "react";

const INNITIAL_STATE = {
    user:  JSON.parse( localStorage.getItem('userr'))|| null,
   // user:  null,
  loading:false,
  error:null
};

export const UserInformation = createContext(INNITIAL_STATE);

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
      case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
      case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INNITIAL_STATE);
  useEffect(()=>{
    localStorage.setItem('userr',JSON.stringify(state.user))
  },[state.user])
  return (
    
    <UserInformation.Provider value={{
      user:state.user,
      dispatch
  }}>
      {children}
  </UserInformation.Provider>
  );
};
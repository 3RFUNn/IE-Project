import axios from "axios";
import { userActions } from "../../reducers/user-slice";
import jwtDecode from "jwt-decode";

const baseUri = process.env.REACT_APP_BASE_API;

/* create async thunk for login request */
export const submitLogin = (user) => {
  return async (dispatch) => {
    const request = async () => {
      if (user?.id && user?.password) {
        const res = await axios.post(`${baseUri}login`, user);
        return res;
      }
    };
    try {
      const { data } = await request();
      if (data && data?.data) {
        localStorage.setItem("token", data?.data);
        const userPublicData = jwtDecode(data?.data);
        userPublicData && dispatch(userActions.userDataUpdate(userPublicData));
        userPublicData && dispatch(userActions.userLogin());
      } else {
        // dispatch error
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDataFromTokenAfterReload = () => {
  return (dispatch) => {
    dispatch(userActions.userDataUpdate());
  };
};

export const Logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(userActions.userLogout());
  };
};

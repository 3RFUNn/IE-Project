import axios from "axios";
import { courseActions } from "../reducers/course-slice";
import { termActions } from "../reducers/term-slice";

const baseUri = process.env.REACT_APP_BASE_API;
const token = localStorage.getItem("token");

export const createNewTerm = (req) => {
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.post(`${baseUri}term`, req, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data?.data) {
        dispatch(courseActions.coursesDataUpdate(data?.data?.data));
        dispatch(courseActions.successCreate());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* modify student */
export const modifyTerm = (req) => {
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.put(`${baseUri}term/${req}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data?.data) {
        dispatch(courseActions.courseDataUpdate(data?.data?.data));
        dispatch(courseActions.successModify());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* get student */
export const getTerm = (req) => {
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.get(`${baseUri}term/${req?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data?.data) {
        dispatch(termActions.termDataUpdate(data?.data?.data));
        dispatch(courseActions.successGet());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* get students */
export const getTermsList = (req) => {
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.get(`${baseUri}term`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data?.data) {
        dispatch(termActions.termsDataUpdate(data?.data?.data));
        dispatch(courseActions.successGet());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* delete student */
export const deleteTerm = (req) => {
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.delete(`${baseUri}term/${req?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if(data?.data){
        dispatch(courseActions.successCreate());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

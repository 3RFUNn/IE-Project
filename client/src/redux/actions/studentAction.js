import axios from "axios";
import { studentActions } from "../reducers/student-slice";

const baseUri = process.env.REACT_APP_BASE_API;
const token = localStorage.getItem("token");

/* create new student */
export const createNewStudent = (req) => {
  //done
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.post(`${baseUri}admin/student`, req.body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data) {
        dispatch(studentActions.studentsDataUpdate());
        dispatch(studentActions.successCreate());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* modify student */
export const modifyStudent = (req) => {
  //done
  return async (dispatch) => {
    const request = async () => {
      const response = await axios.put(
        `${baseUri}admin/student/${req?.id}`,
        req,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response;
    };

    try {
      const data = await request();
      if (data) {
        dispatch(studentActions.successModify());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* get student */
export const getStudent = (req) => {
  return async (dispatch) => {
    const request = async () => {
      if (req.userType === "itmanager") {
        const response = await axios.get(`${baseUri}admin/student/${req?.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return response;
      } else {
        const response = await axios.get(`${baseUri}student/${req?.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return response;
      }
    };

    try {
      const data = await request();

      if (data) {
        dispatch(studentActions.studentDataUpdate(data?.data?.data));
        dispatch(studentActions.successGet());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* get students */
export const getStudentsList = (req) => {
  //done
  return async (dispatch) => {
    const request = async () => {
      if (token) {
        if (req?.userType === "itmanager") {
          const response = await axios.get(
            `${baseUri}admin/students?page=${req?.page}&limit=${req.limit}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          return response;
        } else {
          const response = await axios.get(
            `${baseUri}students?page=${req?.page}&limit=${req.limit}`,
            
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          return response;
        }
      }
    };

    try {
      const data = await request();
      if (data) {
        dispatch(studentActions.studentsDataUpdate(data.data?.data));
        dispatch(studentActions.successGet());
      }
      if (data.data?.status !== 200) {
        dispatch(studentActions.error());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/* delete student */
export const deleteStudent = (req) => {
  //done
  return async (dispatch) => {
    console.log(req);
    const request = async () => {
      const response = await axios.delete(`${baseUri}admin/student/${req}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    };

    try {
      const data = await request();
      if (data) {
        dispatch(studentActions.studentsDelete(req));
        dispatch(studentActions.successDelete());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

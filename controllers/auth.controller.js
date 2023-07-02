import { TOKEN_EXPIRE_TIME } from "../utils/jwt.js";
import { redisSetToken } from "../utils/redis.js";
import { loginUser, registerUser } from "./auth.action.js";
// {
//   "firstName": "user1",
//   "lastName": "user11",
//   "id": "12345678",
//   "password": "HelloWorld12",
//   "email": "user1@gmail.com",
//   "mobileNumber": "09123456789",
//   "level": "Bachelor",
//   "entryYear": 1400,
//   "entryTerm": "Summer",
//   "gpa": 3.5,
//   "courses": []
// }
export const registerUserHandler = async (req, res) => {
  try {
    console.log("register =>", req?.body);
    const token = await registerUser(req?.body, req?.params?.type === "true");
    if (token) {
      res
        .status(200)
        .setHeader("Authorization", `Bearer ${token}`)
        .json({
          data: token,
          status: 200,
          error: null,
          ok: true,
          message: "",
        })
        .end(() => {});
    } else {
      res
        .status(400)
        .json({
          data: token,
          status: 400,
          error: "invalid data",
          ok: false,
          message: "error in register",
        })
        .end(() => {});
    }
  } catch (error) {
    console.log("error =>", error);
    res
      .status(400)
      .json({
        data: null,
        status: 400,
        error: error,
        ok: false,
        message: "error in register",
      })
      .end(() => {});
  }
};

export const loginUserHandler = async (req, res) => {
  try {
    const token = await loginUser(req?.body?.id, req?.body?.password);
    if (token) {
      // await redisSetToken(
      //     req?.body?.id,
      //     `Bearer ${token}`,
      //     TOKEN_EXPIRE_TIME,
      // );
      res
        .setHeader("Authorization", `Bearer ${token}`)
        .status(200)
        .json({
          data: token,
          status: 200,
          error: null,
          ok: true,
          message: "",
        })
        .end(() => {});
      return;
    } else {
      res
        .status(400)
        .json({
          data: token,
          status: 400,
          error: "invalid data",
          ok: true,
          message: "error in login",
        })
        .end(() => {});
      return;
    }
  } catch (error) {
    console.log("error => ", error);
    res
      .status(400)
      .json({
        data: null,
        status: 400,
        error: error,
        ok: true,
        message: "error in login",
      })
      .end(() => {});
    return;
  }
};

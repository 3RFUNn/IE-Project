import jwt from "jsonwebtoken";
// import {redisGetToken} from "./redis.js";

const SECRET = process.env.SECRET || "7T22$ccgfhjkg$54$%$f7hgfds#$j87";

export const authenticateToken = (req, res, next) => {
    const route = req.path;
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token => ", token);
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, SECRET, (err, authData) => {
        // const lastToken = redisGetToken(authData?.id);
        // if (lastToken !== token) {
        //     return res.status(403).json({
        //         data: null,
        //         error: err,
        //         message: "token authentication error",
        //         ok: false,
        //     });
        // }
        if (err) {
            return res.status(403).json({
                data: null,
                error: err,
                message: "token authentication error",
                ok: false,
            });
        } else if (
            authData.userType !== "itmanager" &&
            route.startsWith("/admin/")
        ) {
            return res.status(403).json({
                data: null,
                error: "access denied",
                message: "you don't have required permissions",
                ok: false,
            });
        }
        req.authData = authData;
        next();
    });
};

export const TOKEN_EXPIRE_TIME = 1800;

export const generateAccessToken = (data) => {
    const token = jwt.sign(data, SECRET, {expiresIn: `${TOKEN_EXPIRE_TIME}s`});
    console.log("token => ", token, SECRET);
    return token;
};

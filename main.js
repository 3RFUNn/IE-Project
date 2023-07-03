import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "./swagger.json" assert {type: "json"};
import addUserRouter from "./routes/users.route.js";
import addAuthRouter from "./routes/auth.route.js";
import addCourseRouter from "./routes/courses.route.js";
import addTermRouter from "./routes/terms.route.js";

dotenv.config({path: "./.env"});

const main = () => {
    const app = express();
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());
    app.use(express.static(path.join(".", "public")));
    addAuthRouter(app);
    addUserRouter(app);
    addCourseRouter(app);
    addTermRouter(app);
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    app.listen(process.env.PORT || 4000, () => {
        console.log(`port => ${process.env.PORT || 4000}`);
    });
};

main();

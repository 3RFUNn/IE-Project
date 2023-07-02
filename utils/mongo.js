import mongoose from "mongoose";
import {seedItManager} from "../models/user.model.js";

const database_url =
    process.env.MONGODB ||
    "mongodb+srv://cypress7975:fVFAzhd55@registersystem.0yd0y7i.mongodb.net/?retryWrites=true&w=majority";

// export const mongoose_client = mongoose.createConnection(database_url, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

mongoose
    .connect(database_url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: "ls",
    })
    .then(() => {
        seedItManager();
    })
    .catch((error) => {
        console.log("error in connect mongo => ", error);
    });

export const mongoose_client = mongoose;

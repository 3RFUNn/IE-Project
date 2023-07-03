import {mongoose_client} from "../utils/mongo.js";
const Schema = mongoose_client.Schema;
const options = {discriminatorKey: "kind"};

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const DepartmentModel = mongoose_client.model("term", DepartmentSchema);

export const DEPARTMENT_MODELS = {
    DepartmentModel,
};

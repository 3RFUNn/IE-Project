import {mongoose_client} from "../utils/mongo.js";
const Schema = mongoose_client.Schema;
const options = {discriminatorKey: "kind"};

const TermSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    courses: {
        type: [{type: Schema.Types.ObjectId, ref: "courses"}],
        required: true,
        default: [],
    },
    users: {
        type: [{type: Schema.Types.ObjectId, ref: "users"}],
        required: true,
        default: [],
    },
});

const TermModel = mongoose_client.model("terms", TermSchema);

export const TERM_MODELS = {
    TermModel,
};

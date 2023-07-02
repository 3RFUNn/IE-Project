import { mongoose_client } from "../utils/mongo.js";
import { generatePasswordHash } from "../utils/hash.js";
const Schema = mongoose_client.Schema;
const options = { discriminatorKey: "kind" };

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
});

//Create Approved Course Schema

const UserModel = mongoose_client.model("user", UserSchema);

const StudentModel = UserModel.discriminator(
  "student",
  new Schema({
    level: {
      type: String,
    },
    entryYear: {
      type: Number,
    },
    entryTerm: {
      type: String,
    },
    gpa: {
      type: Number,
      required: true,
    },
    courses: {
      type: [String],
      default: [],
    },
    supervisor: {
      type: String,
    },
  }),
  options
);

const ProfessorModel = UserModel.discriminator(
  "professor",
  new Schema({
    department: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    courses: {
      type: [String],
      required: true,
      default: [],
    },
  }),
  options
);

const EduManagerModel = UserModel.discriminator(
  "edumanager",
  new Schema({
    department: {
      type: String,
      required: true,
    },
  }),
  options
);

const ItManagerModel = UserModel.discriminator("itmanager", new Schema({}));

export const seedItManager = async () => {
  const ITMAN = await ItManagerModel.findOne({ id: "12344321" }).exec();
  if (!ITMAN) {
    const itManager = new ItManagerModel({
      firstName: "admin",
      lastName: "admin",
      id: "12344321",
      password: await generatePasswordHash("AdminPass123"),
      email: "admin@gmail.com",
      mobileNumber: "09123456789",
    });
    await itManager.save();
    console.log("it man added");
  } else {
    console.log("it man exists => ", ITMAN);
  }
};

export const USER_MODELS = {
  UserModel,
  EduManagerModel,
  ItManagerModel,
  ProfessorModel,
  StudentModel,
};

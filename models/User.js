import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import passport from "passport";

const userSchema = new mongoose.Schema({
  alias: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, required: true, default: false },
  secrets: [],
});

const User = new mongoose.model("user", userSchema);

export default User;
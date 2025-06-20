import mongoose from "mongoose";

// userModel.js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // <-- fix typo
  },
  email: {
    type: String,
    required: true,
  },
  collage: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", userSchema);

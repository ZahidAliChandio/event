import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide an email address."],
  },
  text: {
    type: String,
    required: [true, "Please write something in comment section."],
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

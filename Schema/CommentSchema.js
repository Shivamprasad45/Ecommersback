import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Comment: {
    type: String,
    required: true,
  },
  ProductId: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
});

export const CommentModel = mongoose.model("AllUserComments", CommentSchema);

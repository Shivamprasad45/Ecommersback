import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  Id: {
    type: Number,
    require: true,
  },
  user: {
    type: String,
    required: true,
  },
});

export const BrowserModel = mongoose.model("BrowserHistory", CartSchema);

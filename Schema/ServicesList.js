import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
    unique: true,
  },
  images: {
    type: Array,
    required: true,
    unique: true,
  },
});

export const ServicesListModel = mongoose.model("ServicesList", ServicesSchema);

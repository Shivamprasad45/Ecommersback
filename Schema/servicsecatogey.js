import mongoose from "mongoose";

const ServicesCatories = new mongoose.Schema({
  ImageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export const ServicesModle = mongoose.model("Catogries", ServicesCatories);

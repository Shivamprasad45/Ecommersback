import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  Cart: [
    {
      price: {
        type: Number,
        required: true,
      },

      Quantity: {
        type: Number,
      },

      ProductId: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
    },
  ],
  UserId: {
    type: String,
    required: true,
  },
  Add: [
    {
      email: {
        type: String,
        required: true,
      },
      CardHolder: {
        type: String,
        required: true,
      },
      Card_Details: {
        type: String,
        required: true,
      },
      credit_expiry: {
        type: String,
        required: true,
      },
      credit_cvc: {
        type: String,
        required: true,
      },
      billing_address: {
        type: String,
        required: true,
      },
      billing_state: {
        type: String,
        required: true,
      },
      billing_zip: {
        type: String,
        required: true,
      },
    },
  ],
});

export const OrderModel = mongoose.model("Orders", OrderSchema);

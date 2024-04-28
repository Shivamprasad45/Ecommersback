import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  Cart: [
    {
      price: {
        type: Number,
      },

      Quantity: {
        type: Number,
      },

      ProductId: {
        type: Number,
      },
      title: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
    },
  ],
  UserId: {
    type: String,
  },
  Add: [
    {
      email: {
        type: String,
      },
      CardHolder: {
        type: String,
      },
      Card_Details: {
        type: String,
      },
      credit_expiry: {
        type: String,
      },
      credit_cvc: {
        type: String,
      },
      billing_address: {
        type: String,
      },
      billing_state: {
        type: String,
      },
      billing_zip: {
        type: String,
      },
    },
  ],
});

export const OrderModel = mongoose.model("Orders", OrderSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  UserId: {
    type: String,
  },
  Addresses: [
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

export const UserModel = mongoose.model("User", UserSchema);

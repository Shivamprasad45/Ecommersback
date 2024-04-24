import express from "express";
import multer from "multer";
import {
  AddressesAdd,
  LoginCon,
  RemoveAddress,
  UpdateAddresses,
  User,
} from "../controllers/UserControllers.js";
const route = express.Router();
const Login = express.Router();
const upload = multer();
route.post("/", upload.none(), User);
Login.post("/", upload.none(), LoginCon)
  .patch("/:UserId", upload.none(), AddressesAdd)
  .delete("/:UserId", upload.none(), RemoveAddress)
  .put("/Update", upload.none(), UpdateAddresses);
export const UserRoute = route;
export default Login;

import express from "express";
import multer from "multer";
import {
  Cart,
  DELETEDataCartByUser,
  UpdateCartByUser,
  fetchDataCartByUser,
} from "../controllers/CartControllers .js";

const route = express.Router();
const CartIdFetch = express.Router();
const upload = multer();
route.post("/", upload.none(), Cart);
CartIdFetch.get("/", fetchDataCartByUser)
  .get("/:DelId", DELETEDataCartByUser)
  .post("/UpdateCart", upload.none(), UpdateCartByUser);

export const CartRoute = route;
export const CartFetchByUser = CartIdFetch;

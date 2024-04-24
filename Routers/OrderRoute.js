import express from "express";
import multer from "multer";
import { FetchOrder, OrderData } from "../controllers/OrderControl.js";

const route = express.Router();

const upload = multer();
route.post("/:Id", upload.none(), OrderData).get("/:UserId", FetchOrder);

export const OrderRoute = route;

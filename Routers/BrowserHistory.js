import express from "express";
import multer from "multer";
import {
  CommentSave,
  FetchComments,
  FetchHistoryId,
  HistorySave,
} from "../controllers/BrowserSave.js";

const upload = multer();
const route = express.Router();
const Route = express.Router();

route
  .post("/HistorySave", upload.none(), HistorySave)
  .get("/:Id", FetchHistoryId);

Route.get("/:id", FetchComments).post(
  "/CommentSave",
  upload.none(),
  CommentSave
);

export const BrowserRoute = route;
export const CommentsRoute = Route;

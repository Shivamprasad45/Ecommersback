import express from "express";
import Search from "../controllers/SearchCon.js";

const route = express.Router();

route.get("/", Search);

export const SearchRoute = route;

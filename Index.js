import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { UserRoute } from "./Routers/userRouter.js";
import {
  ServicesListDetailsRoute,
  ServicesListRoute,
  ServicesRoute,
} from "./Routers/servicesRouter.js";
import { CartFetchByUser, CartRoute } from "./Routers/CartRoute.js";
const app = express();
app.use(bodyParser.json());
import UserLogin from "./Routers/userRouter.js";
import { BrowserRoute, CommentsRoute } from "./Routers/BrowserHistory.js";
import { OrderRoute } from "./Routers/OrderRoute.js";
import { SearchRoute } from "./Routers/SearchRoute.js";
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8000;
//cors setup

app.use(
  cors({
    origin: "*",
  })
);
app.use("/user", UserRoute);
app.use("/Services", ServicesRoute);
app.use("/ServicesList", ServicesListRoute);
app.use("/ServicesListDetails", ServicesListDetailsRoute);
app.use("/Login", UserLogin);
app.use("/Cart", CartRoute);
app.use("/CartId", CartFetchByUser);
app.use("/Browser", BrowserRoute);
app.use("/Comment", CommentsRoute);
app.use("/Order", OrderRoute);
app.use("/Search", SearchRoute);
app.get("/", (req, res) => {
  res.send("Hi I am alive here and I am man");
});

mongoose
  .connect(
    "mongodb+srv://shivamGond:Mmfdv2UuHK9LVAjS@cluster0.y7agcqc.mongodb.net/EcommresReact",
    {
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(() => {
    console.log("Mongoose Connection error");
  });
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

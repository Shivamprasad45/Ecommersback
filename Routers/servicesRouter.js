import express from "express";

import {
  AllProducts,
  Service,
  ServiceList,
  ServiceListDetails,
} from "../controllers/ServicesControllers.js";

const route = express.Router();
const ServiceLists = express.Router();
const ServiceListsDelails = express.Router();
route.get("/", Service);
ServiceLists.get("/", ServiceList);
ServiceListsDelails.get("/", ServiceListDetails).get('/Products',AllProducts);
export const ServicesRoute = route;
export const ServicesListRoute = ServiceLists;
export const ServicesListDetailsRoute = ServiceListsDelails;

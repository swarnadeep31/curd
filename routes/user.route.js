import express from "express";
import {
  fetch,
  create,
  update,
  deleteUser,
} from "../controller/user.controller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllusers", fetch);
route.put("/updateuser/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;

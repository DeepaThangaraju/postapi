import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../Controller/postController.js";
const route = express.Router();

route.post("/posts", createPost);
route.get("/posts/:id", getPost);
route.get("/posts", getPosts);
route.delete("/posts/:id", deletePost);
route.patch("/posts/:id", updatePost);

export default route;
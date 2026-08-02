import express from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../Controller/postController.js";
const route = express.Router();

route.post("/post", createPost);
route.get("/post/:id", getPost);
route.get("/posts", getPosts);
route.delete("/post/:id", deletePost);
route.patch("/post/:id", updatePost);

export default route;
import postModel from "../models/postModel.js";


export const createPost = async (req, res) => {
    try {
        const { userId, title, body } = req.body;
        if (!userId || !title || !body) {
            return res.status(404).json({ message: "Enter all details" })
        }
        const newPost = {
            userId, title, body
        }
        const post = new postModel(newPost);
        await post.save();
        return res.status(201).json({ data: post })
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", err });
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Id not found" })
        }
        const post = await postModel.findById({ _id: id });
        if (!post) {
            return res.status(404).message({ message: "Post not found" })
        }
        return res.status(200).json({ data: post })
    } catch (err) {
        res.status(500).json({ message: "Something wrong", err });
    }
}


export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        if (!posts) {
            return res.status(404).json({ message: "No posts found" })
        }
        return res.status(200).json({ data: posts })
    } catch (err) {
        return res.status(500).json({ message: `Something wrong ${err.message}` });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).json({ message: "Id not found" });
        }
        const deletedPost = await postModel.findByIdAndDelete({ _id: id });
        if (!deletedPost) {
            return res.status(400).json({ message: "Post not found" })
        }
        return res.status(200).json({ message: "Deleted Successfully", data: deletedPost });
    } catch (err) {
        return res.status(500).json({ message: `Something Wrong ${err.message}` });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).json({ messaeg: "Id not found" })
        }
        const { userId, title, body } = req.body;
        const toUpdate = { userId, title, body };
        const findAndUpdate = await postModel.findOneAndUpdate({ _id: id }, { ...toUpdate });
        return res.status(200).json({ findAndUpdate });
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong ${err.message}` })
    }
}

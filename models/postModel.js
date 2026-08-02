import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        title: { type: String, required: true },
        body:{type:String,required:true}
    },
    {
        timestamps:true
    }
)

const postModel = mongoose.model("post", postSchema);

export default postModel;
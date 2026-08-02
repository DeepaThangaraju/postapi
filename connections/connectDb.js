import mongoose from "mongoose"

export const connectDb =async (url) => {
    try {
        await mongoose.connect(url);
        console.log("Connected to DB")
    } catch (err) {
        console.log("Something wrong with mongo connection",err.message)
    }
}
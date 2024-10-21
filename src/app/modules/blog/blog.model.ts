import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";


const blogSchema = new Schema<TBlog>({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const BlogModel = model<TBlog>('Blog', blogSchema)
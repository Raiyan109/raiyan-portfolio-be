import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TBlog } from "./blog.interface";
import { BlogModel } from "./blog.model";

const createBlogIntoDB = async (blog: TBlog) => {
    const isBlogExists = await BlogModel.findOne({ name: blog.title })
    if (isBlogExists) {
        throw new AppError(httpStatus.CONFLICT, 'This blog is already exists!');
    }
    const result = await BlogModel.create(blog)
    return result
}

const getAllBlogsFromDB = async () => {
    const result = await BlogModel.find()
    return result;
};

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB
}
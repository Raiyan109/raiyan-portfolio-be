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

const getSingleBlogFromDB = async (id: string) => {
    const result = await BlogModel.findById(id)
    return result
}

const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
    try {
        const updatedBlogInfo = await BlogModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true,
                //   session,
            },
        );

        if (!updatedBlogInfo) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update blog');
        }

        return updatedBlogInfo;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update blog');
    }
};

const deleteBlogFromDB = async (id: string) => {
    const result = await BlogModel.findByIdAndDelete(
        id
    );
    return result;
};


export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB
}
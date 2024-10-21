import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "../blog/blog.service";

const createBlog = catchAsync(async (req, res) => {

    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog added successfully',
        data: result,
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogsFromDB();

    // Check if the database collection is empty or no matching data is found
    if (!result || result.length === 0) {
        return sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'No data found.',
            data: [],
        });
    }

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blogs retrieved successfully',
        data: result,
    });
});

const getSingleBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.getSingleBlogFromDB(id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Single Blog retrieved successfully',
        data: result,
    });
})

const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.updateBlogIntoDB(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog updated successfully',
        data: result,
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.deleteBlogFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog deleted successfully',
        data: result,
    });
});

export const BlogControllers = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExists = yield blog_model_1.BlogModel.findOne({ name: blog.title });
    if (isBlogExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, 'This blog is already exists!');
    }
    const result = yield blog_model_1.BlogModel.create(blog);
    return result;
});
const getAllBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.find();
    return result;
});
const getSingleBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.findById(id);
    return result;
});
const updateBlogIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlogInfo = yield blog_model_1.BlogModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
            //   session,
        });
        if (!updatedBlogInfo) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update blog');
        }
        return updatedBlogInfo;
    }
    catch (err) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update blog');
    }
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogModel.findByIdAndDelete(id);
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    getSingleBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB
};

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
exports.BioControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const blog_service_1 = require("../blog/blog.service");
const bio_service_1 = require("./bio.service");
// Skills
const createSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_service_1.BioServices.createSkillIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Skill added successfully',
        data: result,
    });
}));
const getAllSkills = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_service_1.BioServices.getAllSkillsFromDB();
    // Check if the database collection is empty or no matching data is found
    if (!result || result.length === 0) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'No data found.',
            data: [],
        });
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Skills retrieved successfully',
        data: result,
    });
}));
const getSingleSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bio_service_1.BioServices.getSingleSkillFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Single Skill retrieved successfully',
        data: result,
    });
}));
const updateSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bio_service_1.BioServices.updateSkillIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Skill updated successfully',
        data: result,
    });
}));
const deleteSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.BlogServices.deleteBlogFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Skill deleted successfully',
        data: result,
    });
}));
// Projects
const createProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_service_1.BioServices.createProjectIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Project added successfully',
        data: result,
    });
}));
const getAllProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_service_1.BioServices.getAllProjectsFromDB();
    // Check if the database collection is empty or no matching data is found
    if (!result || result.length === 0) {
        return (0, sendResponse_1.default)(res, {
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: 'No data found.',
            data: [],
        });
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Projects retrieved successfully',
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield bio_service_1.BioServices.getSingleProjectFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Single Project retrieved successfully',
        data: result,
    });
}));
exports.BioControllers = {
    createSkill,
    getAllSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill,
    createProject,
    getAllProjects,
    getSingleProject
};

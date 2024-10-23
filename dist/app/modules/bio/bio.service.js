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
exports.BioServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const bio_model_1 = require("./bio.model");
// Skills
const createSkillIntoDB = (skill) => __awaiter(void 0, void 0, void 0, function* () {
    const isSkillExists = yield bio_model_1.SkillModel.findOne({ name: skill.title });
    if (isSkillExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, 'This skill is already exists!');
    }
    const result = yield bio_model_1.SkillModel.create(skill);
    return result;
});
const getAllSkillsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_model_1.SkillModel.find();
    return result;
});
const getSingleSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_model_1.SkillModel.findById(id);
    return result;
});
const updateSkillIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSkillInfo = yield bio_model_1.SkillModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
            //   session,
        });
        if (!updatedSkillInfo) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update skill');
        }
        return updatedSkillInfo;
    }
    catch (err) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update skill');
    }
});
const deleteSkillFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_model_1.SkillModel.findByIdAndDelete(id);
    return result;
});
// Projects
const createProjectIntoDB = (project) => __awaiter(void 0, void 0, void 0, function* () {
    const isProjectExists = yield bio_model_1.ProjectModel.findOne({ name: project.title });
    if (isProjectExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, 'This project is already exists!');
    }
    const result = yield bio_model_1.ProjectModel.create(project);
    return result;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bio_model_1.ProjectModel.find();
    return result;
});
exports.BioServices = {
    createSkillIntoDB,
    getAllSkillsFromDB,
    getSingleSkillFromDB,
    updateSkillIntoDB,
    deleteSkillFromDB,
    createProjectIntoDB,
    getAllProjectsFromDB
};

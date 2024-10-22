"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = exports.SkillModel = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.SkillModel = (0, mongoose_1.model)('Skill', skillSchema);
const projectSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    links: {
        type: [String],
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
}, { timestamps: true });
exports.ProjectModel = (0, mongoose_1.model)('Project', projectSchema);

import { Schema, model } from "mongoose";
import { TProjects, TSkills } from "./bio.interface";



const skillSchema = new Schema<TSkills>({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const SkillModel = model<TSkills>('Skill', skillSchema)

const projectSchema = new Schema<TProjects>({
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
}, { timestamps: true })

export const ProjectModel = model<TProjects>('Project', projectSchema)
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { SkillModel } from "./bio.model";
import { TSkills } from "./bio.interface";

const createSkillIntoDB = async (skill: TSkills) => {
    const isSkillExists = await SkillModel.findOne({ name: skill.title })
    if (isSkillExists) {
        throw new AppError(httpStatus.CONFLICT, 'This skill is already exists!');
    }
    const result = await SkillModel.create(skill)
    return result
}

const getAllSkillsFromDB = async () => {
    const result = await SkillModel.find()
    return result;
};

const getSingleSkillFromDB = async (id: string) => {
    const result = await SkillModel.findById(id)
    return result
}

const updateSkillIntoDB = async (id: string, payload: Partial<TSkills>) => {
    try {
        const updatedSkillInfo = await SkillModel.findByIdAndUpdate(
            id,
            payload,
            {
                new: true,
                runValidators: true,
                //   session,
            },
        );

        if (!updatedSkillInfo) {
            throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update skill');
        }

        return updatedSkillInfo;
    } catch (err) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update skill');
    }
};

const deleteSkillFromDB = async (id: string) => {
    const result = await SkillModel.findByIdAndDelete(
        id
    );
    return result;
};


export const BioServices = {
    createSkillIntoDB,
    getAllSkillsFromDB,
    getSingleSkillFromDB,
    updateSkillIntoDB,
    deleteSkillFromDB
}
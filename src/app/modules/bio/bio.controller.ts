import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "../blog/blog.service";
import { BioServices } from "./bio.service";

const createSkill = catchAsync(async (req, res) => {

    const result = await BioServices.createSkillIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill added successfully',
        data: result,
    });
});

const getAllSkills = catchAsync(async (req, res) => {
    const result = await BioServices.getAllSkillsFromDB();

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
        message: 'Skills retrieved successfully',
        data: result,
    });
});

const getSingleSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BioServices.getSingleSkillFromDB(id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Single Skill retrieved successfully',
        data: result,
    });
})

const updateSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BioServices.updateSkillIntoDB(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill updated successfully',
        data: result,
    });
});

const deleteSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.deleteBlogFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Skill deleted successfully',
        data: result,
    });
});

export const BioControllers = {
    createSkill,
    getAllSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill
}
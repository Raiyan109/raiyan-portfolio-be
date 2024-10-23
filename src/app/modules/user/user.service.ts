import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from 'bcrypt';

const createUserIntoDB = async (payload: TUser) => {
    try {
        let user = await User.create(payload)

        return user
    } catch (error) {
        console.log(error);
    }
}

const login = async (payload: TLoginUser) => {
    const adminEmail = 'admin@g.com';
    const user = await User.isUserExistsByEmail(payload.email)
    // Check if the provided email matches the admin email
    if (payload.email !== adminEmail) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user does not exist!');
    }

    //checking if the password is correct
    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');


    return {
        user
    };
};

export const UserServices = {
    createUserIntoDB,
    login
}
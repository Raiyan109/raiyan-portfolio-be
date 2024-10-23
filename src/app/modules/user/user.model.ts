import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser, UserModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB

    const saltRounds = 10
    user.password = await bcrypt.hash(
        user.password, saltRounds
    );

    next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
    // return await User.findOne({ email });
    return await User.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>('User', userSchema)
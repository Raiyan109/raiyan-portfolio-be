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
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("./user.model");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield user_model_1.User.create(payload);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const adminEmail = 'admin@g.com';
    const user = yield user_model_1.User.isUserExistsByEmail(payload.email);
    // Check if the provided email matches the admin email
    if (payload.email !== adminEmail) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user does not exist!');
    }
    //checking if the password is correct
    if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password)))
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Password do not matched');
    return {
        user
    };
});
exports.UserServices = {
    createUserIntoDB,
    login
};

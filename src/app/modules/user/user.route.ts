import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();


router.post(
    '/signup',
    // validateRequest(UserValidations.userValidationSchema),
    UserControllers.signUp,
);

router.post(
    '/login',
    // validateRequest(UserValidations.loginValidationSchema),
    UserControllers.loginUser,
);


export const UserRoutes = router;
import express from "express";
import { loggOutUser, loginUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import {upload} from '../middlewares/multer.middleware.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route('/register').post(upload.fields([
    {
        name: "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
]) , 
    registerUser);
 router.route('/login').post(loginUser);


//  Secured Routes

router.route('/logout').post(verifyJWT,  loggOutUser)
router.route('/refreshToken').post(refreshAccessToken)


export default router
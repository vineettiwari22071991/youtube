import { Router } from "express"
import {
    registerUser, loginUser, logoutUser, refreshAccessToken
    , changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar,
    updateUserCoverImage
} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"
const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)



//secure route
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/get-current-user").get(verifyJWT, getCurrentUser)
router.route("/update-user-account").patch(verifyJWT, updateAccountDetails)
router.route("/update-cover-image").patch(verifyJWT, upload.fields(
    {
        name: coverImage,
        maxCount: 1
    }
), updateUserCoverImage)
router.route("/update-avatar").patch(verifyJWT, upload.fields(
    {
        name: avatar,
        maxCount: 1
    }
), updateUserAvatar)

router.route("/refresh-token").post(refreshAccessToken)


export default router
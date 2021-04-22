import { Router } from "express"
import {
    //Normal Users
    renderSignUpForm,
    signup,
    renderSigninForm,
    signin,
    logout,
    //User config
    renderUserConfig,
    // Moderators
    renderSigninFormMod,

    // Recover Account
    renderRecoverAccountForm
} from "../controllers/usersController.js"

const router = Router()

// Routes
router.get('/users/signup', renderSignUpForm)

router.post('/users/signup', signup)

router.get('/users/signin', renderSigninForm)

router.post('/users/signin', signin)

router.get('/users/logout', logout)

// User config
router.get('/users/config', renderUserConfig)

// Recover account
router.get('/users/recover-account', renderRecoverAccountForm)


// Moderators

router.get('/users/mod/signin', renderSigninFormMod)


export default router;
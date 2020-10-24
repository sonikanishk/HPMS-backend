const express = require('express')
const router = express.Router()

const{
    registerController,
    SignInController,
    forgotPasswordController,
    resetPasswordController,
    queryController,
    doctorController,
    donorController,
    staffController
} = require("../controllers/auth.controller.js")

const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')


router.post('/register',validSign,registerController)
router.post('/login',validLogin,SignInController)
router.post('/query',queryController);
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);
router.get('/doctors',doctorController);
router.get('/donor',donorController);
router.get('/staff',staffController);

module.exports = router

const express = require('express');
const router = express.Router();
const auth = require('../midleware/checkAuth');

const UserController= require('../controls/user');
const contactController= require('../controls/contact');
const ForgotPasswordController = require('../controls/forgot_password');

router.post('/signup', UserController.user_signup);

router.post('/login' , UserController.user_login);

router.post('/contact' , contactController.user_contact);

router.post('/resetPassword', auth , UserController.userPassword_update_Password);

router.post('/forgotpassword', ForgotPasswordController.forgotPassword);

module.exports = router;
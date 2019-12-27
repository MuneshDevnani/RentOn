const express = require('express');
const router = express.Router();
const auth = require('../midleware/checkAuth')

const AccountController= require('../controls/account_info');
    
    router.post('/', auth ,  AccountController.account_create_accountDetails);

    router.get('/',auth, AccountController.account_get_accountDetails);

module.exports = router;
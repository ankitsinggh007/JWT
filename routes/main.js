const express=require('express');

const router=express.Router();

const {
    Login,dashboard
}=require('../controllers/main.js');
const authenticationMiddleware = require('../middleware/auth.js');

router.route('/dashboard').get(authenticationMiddleware,dashboard);
router.route('/login').post(Login);

module.exports = router;
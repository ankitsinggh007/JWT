const express=require('express');

const router=express.Router();

const {
    Login,dashboard
}=require('../controllers/main.js');

router.route('/dashboard').get(dashboard);
router.route('/login').post(Login);

module.exports = router;
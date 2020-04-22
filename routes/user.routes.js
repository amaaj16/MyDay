const Router =require('express').Router
const UsereCtrl = require('../api/user.controller');

const router = new Router()

router.route("/logIn").post(UsereCtrl.login)
router.route("/singup").post(UsereCtrl.signUP)
module.exports = router
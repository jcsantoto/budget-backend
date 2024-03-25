const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const testController = require('../controllers/testController');


router.get("/test", testController.testGet);
router.post("/test", testController.testPost);

router.post('/register', userController.createUser);
router.post('/getuser', userController.getUser);

router.post('/updatename', userController.updateUsername);
router.post('/updateemail', userController.updateEmail);
router.post('/updatepassword', userController.updatePassword);

router.post('/delete-user', userController.deleteUser);



module.exports = router;
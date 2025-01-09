const express = require('express');
const router = express.Router();
const { logon, hello } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.post('/logon', logon);
router.get('/hello', authMiddleware, hello);

module.exports = router;

const express = require('express');
const router = express.Router();
const user = require('../services/User');

router.post('/', user.createUser);

router.get('/signIn', user.signingIn);

module.exports = router;
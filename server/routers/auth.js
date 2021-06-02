const { Router } = require('express');
const authMiddleware = require('../auth/middleware');

const router = new Router();

router.get('/', async (req, res, next) => {
    
})

module.exports = router;

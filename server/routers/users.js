const { Router } = require('express');
const authMiddleware = require('../auth/middleware');
const User = require('../models').user
const Post = require('../models').post

const router = new Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            include: [{model: Post}]
        });
    
        res.status(200).send({message: "ok", users});
    } catch (error) {
        next(error)
        
    }
})

module.exports = router;


const router = require('express').Router();

// Import middleware verify token
const { verifyToken } = require('../middlewares/authenticate');

// Import controllers
const UserController = require('../controllers/user.controller');
const AuthController = require('../controllers/auth.controller');


// Creating routes
router.post('/register', UserController.create);

router.post('/login', AuthController.login);

router.get('/users', verifyToken ,UserController.index);


router.get('/protected', verifyToken, (req, res) =>{
    res.status(200).json({
        ok: true,
        message: 'Great success send token!!!'
    });
});


module.exports = router;

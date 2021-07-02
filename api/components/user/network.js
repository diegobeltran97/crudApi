const express = require('express');
const Controller = require('./index');
const secure = require('../../middleware/secure')
const router = express.Router();

// Routes
router.get('/',secure.checkAuth, list);
router.post('/register', register);
router.post('/login', login);


// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            res.send(lista);
            
        })
        .catch(next);
}

function register(req, res, next) {

    Controller.register(req.body.username, req.body.password )
    .then((mensaje) => {
        res.status(200).json(mensaje)
    })
    .catch(next);

}

function login(req,res,next) {
    Controller.login(req.body.username, req.body.password)
    .then( token => {
        res.status(200).json(token)
    })
    .catch(next)

}




module.exports = router;
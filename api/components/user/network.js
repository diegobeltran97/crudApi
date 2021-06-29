const express = require('express');
const Controller = require('./index');
const router = express.Router();

// Routes
router.get('/', list);
router.post('/register', register)

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);

            
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


module.exports = router;
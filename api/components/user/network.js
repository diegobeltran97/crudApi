const express = require('express');
const Controller = require('./index');
const router = express.Router();

// Routes
router.get('/', list);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}


module.exports = router;
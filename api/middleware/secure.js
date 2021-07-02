const auth = require('../auth/index');

function checkAuth(req, res, next) {

    auth.check.logged(req);
    next();

    
 }


module.exports = {
    checkAuth
}

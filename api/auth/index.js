const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;


function sign(data) {
    data = JSON.parse(JSON.stringify(data));
    return jwt.sign(data, secret);
}
function verify(token){
    return jwt.verify(token, secret);
}

const check = {
    own: function( req, owner ) {
     const decoded = decodeHeader(req);

     console.log('codigo decode', decoded);
     
     if (decoded.id !== owner) {
         throw new Error('No puede hacer esto');
     }

    },

    logged: function( req, owner ) {
        const decoded = decodeHeader(req);
   
   
       }
}
function getToken(auth) {
    if(!auth) {
        throw new Error('No viene token');
    }
    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato Invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;

}

function decodeHeader(req) {

    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;

}

module.exports = {
    sign,
    check
}
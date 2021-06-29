const bcrypt = require('bcrypt');
const TABLA = 'user';


module.exports = function (injectedStore) {
    let store = injectedStore;
    if(!store) {
        store = require('../../../store/dummy');
    }
    function list() {
        return store.list(TABLA);
    }


    async function register(username, password) {
       
        
        const data = await store.query(TABLA,{ username: username});
        if (data === null) {
            const authData = {
                username: username,
                password: await bcrypt.hash(password, 5)
            }

            return store.upsert(TABLA, authData)

        } else {
            return 'usuario ya registrado'
        }
     
    }
    
    



    return {
        list,
        register
     
    };
} 
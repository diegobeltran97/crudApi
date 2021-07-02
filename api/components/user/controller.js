const bcrypt = require('bcrypt');
const TABLA = 'user';
const auth =  require('../../auth/index')


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

    async function login(username,password) {
        const data = await store.query(TABLA,{ username: username});

        
        return bcrypt.compare(password, data.password)
             .then(sonIguales => {
                if (sonIguales) {
                    //Generar Token
                    return auth.sign(data)
                } else {
                    throw new Error('Informacion invalida')
                }
                

             })

        
    }
    
    



    return {
        list,
        register,
        login
     
    };
} 
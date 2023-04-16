const { configEnv } = require('./configEnv.js');
const { DB_URL } = configEnv();
const mongoose = require('mongoose');

//* Opciones de configuracion para BDD*/
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//* Conexion a la BDD */
mongoose.connect(DB_URL,options)
    .then(() => console.log('conectado a la base de datos'))
    .catch(err => console.log(err));

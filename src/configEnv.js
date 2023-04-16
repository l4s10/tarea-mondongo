//una vez instalado dotenv, configuramos todo en este archivo
const path = require('path');

//*Configuramos la ruta del archivo .env */
const configEnv = () => {
    const envFilePath = path.resolve(__dirname, '.env');
    //*Cargamos las variables de entorno */
    require('dotenv').config({path: envFilePath});
    //*Ahora retornamos en un objeto las variables */
    return {
        PORT: process.env.PORT,
        HOST: process.env.HOST,
        DB_URL: process.env.DB_URL,
    };
};

module.exports = {configEnv}
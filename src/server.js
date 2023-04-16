//* importamos dependencias */
const { configEnv } = require('./configEnv.js');
const { PORT } = configEnv();
const express = require('express');

//* importamos archivo de configuracion de la BDD (al agregar esto ejecutara lo del arhivo configDB)*/
require('./configDB.js');

// Crea una instancia de la aplicación
const app = express();

// Agrega el middleware para el manejo de datos en formato JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
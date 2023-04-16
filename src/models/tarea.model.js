//*Importamos el módulo de mongoose para crear la conexion a la BDD */
const mongoose = require('mongoose');

//*Se crea el esquema de la coleccion de las tareas */
const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
    },
});

//*Ahora se crea el modelo de la tarea a partir de su esquema */
const Tarea = mongoose.model('Tarea',tareaSchema);

//*Exportamos el modelo de datos 'tarea' */
module.exports = Tarea;
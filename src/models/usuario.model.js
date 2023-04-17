//*Importamos modulo mongoose*/
const mongoose = require('mongoose');

//*Creamos el schema de usuario */
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
//*Creamos el modelo de datos a traves del schema */
const Usuario = mongoose.model('Usuario',usuarioSchema);
//*Exportamos el modelo de datos*/
module.exports = Usuario;
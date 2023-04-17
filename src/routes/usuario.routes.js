//*Importamos modulo express (creacion de rutas) */
const express = require('express');

//*Modelo usuarios */
const usuarioController = require('../controllers/usuario.controller');

//*Creando instancia del enrutador */
const router = express.Router();

//*Definimos las rutas para los usuarios*/
router.get('/',usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);

//*Se exporta el enrutador */
module.exports = router;
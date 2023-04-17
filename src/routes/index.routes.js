//*Importamos expres */
const express = require('express');

//*Importamos el enrutador de usuarios */
const usuarioRoutes = require('./usuario.routes.js');

//*Instancia del enrutador */
const router = express.Router();

//*Definimos las rutas para los ususarios "/api/usuarios" */
router.use('/usuarios',usuarioRoutes);

//*Exportamos */
module.exports = router;

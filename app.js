import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Importar y usar el enrutador
import router from './router.js';
dotenv.config();

const appExpress = express();

appExpress.use(express.json());

// Configuración de CORS
/** ! es un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes que se hacen entre dominios diferentes. Sirve para prevenir que una página web en un dominio A pueda hacer solicitudes directas a recursos (como datos o servicios) en un dominio B sin el permiso explícito del dominio B
*/
const corsOptions = {
    origin: '*', // Reemplaza con el origen permitido
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204 // Sin contenido
};
appExpress.use(cors(corsOptions));


appExpress.use('/api', router);

const config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config.port, config.hostname, () => {
    console.log(`Listening on http://${config.hostname}:${config.port}`);
});

import express from 'express';

const router = express.Router();

// Ruta GET en el enrutador
/**
 *  ? http://127.10.10.10:5050/api/data
 * * usando la ruta anteior podemos acceder a la api 
 */
router.get('/data', (req, res) => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ];
    res.json(data);
});

export default router;
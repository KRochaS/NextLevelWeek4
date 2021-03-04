import express from 'express';

const app = express();


/**
 * GET => Buscar
 * POST => Salvar 
 * PUT => Alterar
 */

app.listen(3333, () => {
    console.log('Server is running!');
});
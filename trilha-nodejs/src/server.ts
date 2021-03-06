import express from 'express';

const app = express();


/**
 * GET => Buscar
 * POST => Salvar 
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica 
 */

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.post('/', (request, response) => {
    // Recebeu dados para salvar
    return response.json({message: 'Os dados foram salvos com sucesso!'})

});

app.listen(3333, () => {
    console.log('Server is running!');
});
import express from 'express';

const app = express();
app.use(express.json());

//GET: buscar ou listar uma informação
//POST: criar uma nova informação no backend
//PUT: atualizar uma informação existente
//DELETE: deletar informação

// Parametros (request body): dados para criacao ou atualizacao de um registro

app.post('/users', (request, response) => {
    console.log(request.body);

    const usersData = [
        { name: 'Luiza', age: 25 },
        { name: 'Carlos', age: 24 },
        { name: 'Laiza', age: 20 },
        { name: 'Joãozinho', age: 34 },
    ]
    return response.json(usersData);
})

//localhost:3333
app.listen(3383);


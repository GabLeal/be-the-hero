//import express and routes
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//iniciando aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//escuta as requisições no navegador na porta 3333
app.listen(3333);


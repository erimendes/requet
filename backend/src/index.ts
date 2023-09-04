import express from 'express';
import { Routes } from './routes/Routes';

require('dotenv').config();

const app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.use('/', Routes());

const port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log(`Servidor escutando na porta ${port}`);
})
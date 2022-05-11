const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017' //'mongodb://<uri>:<port>'
const client = new MongoClient(url)
const dbName = 'express_mongo'

const app = express();

async function dbConnect() {
    await client.connect();
    const db = client.db(dbName);
    // console.log("MongoDB conectado.")
    return db;
}
app.db = dbConnect()
app.use(express.json());

// 
app.get('/', (req, res) => {
    res.status(200).json("OK");
})

app.get('/marcas', (req, res) => {
    res.status(200).json([])
})

app.post('/marcas', (req, res) => {
    app.db
        .then(conn => conn.collection('marcas').insertOne(res.body))
        .then(_ => res.status(201).json('Marca cadastrada com sucesso.'))
        // .catch()
})

// Listar produtos
app.get('/produtos', (req, res) => {
    app.db
        .then(conn => conn.collection('produtos').find())
        .then(produtos => produtos.toArray())
        .then(produtos => res.json(produtos))
})

// Inserir um novo produto
app.post('/produtos', (req, res) => {
    // body
    const produto = req.body
    app.db
        .then(conn => conn.collection('produtos').insertOne(produto))
        .then(produto => res.status(201).json(produto))
})

// Inserir um novo produto
app.get('/produtos/:id', (req, res) => {
    const _id =  new mongoose.Types.ObjectId(req.params.id)
    app.db
        .then(conn => conn.collection('produtos').find({ _id }))
        .then(produtos => produtos.toArray())
        .then(produtos => res.json(produtos))
})

module.exports = app; // Instância de Express

// app.listen(3000, () => {
//     console.log("Server on.")
// })
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
    console.log("MongoDB conectado.")
    return db;
}
app.db = dbConnect()
app.use(express.json());
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

module.exports = app;

// app.listen(3000, () => {
//     console.log("Server on.")
// })
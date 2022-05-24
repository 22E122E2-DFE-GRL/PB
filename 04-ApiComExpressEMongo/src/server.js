const express = require('express');
const consign = require('consign');
const { mongoose } = require('mongoose');

/* const { MongoClient } = require('mongodb');
//'mongodb://<uri>:<port>'
const url = 'mongodb://localhost:27017' 
const client = new MongoClient(url)
const dbName = 'express_mongo' */

const app = express();

/* async function dbConnect() {
    await client.connect();
    const db = client.db(dbName);
    // console.log("MongoDB conectado.")
    return db;
}
app.db = dbConnect() */

require('./middlewares/database.js')
app.db = mongoose
app.use(express.json());

consign()
    .then('./src/middlewares/cors.js') // anexar um arquivo
    .then('./src/api/usuarios.js')
    .then('./src/middlewares/routes.js')
    .into(app)

module.exports = app; // Instância de Express
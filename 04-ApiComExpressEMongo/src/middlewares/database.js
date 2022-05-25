const env = require('../.env');
const mongoose = require('mongoose');

const user = env.DB_USER
const password = env.DB_PASSWORD
const url = env.DB_URL
const port = env.DB_PORT
const database = env.DB_DATABASE

console.log(url+":"+port)

mongoose.connect(
    `mongodb://${user}:${password}@${url}:${port}`,{
        'dbName': database
    }
).then(_ => {console.log('Mongo conectado: ' + database)})
.catch(err => { console.log(err) })
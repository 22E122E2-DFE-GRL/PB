module.exports = app => {

    app.get('/', (req, res) => {
        res.status(200).json("OK");
    })

    app.route('/usuarios')
        .get(app.src.api.usuarios.list)      // listar
        .post(app.src.api.usuarios.save);    // salvar

    /* app.route('/usuarios/:id')
        .get(() => {})
        .put(() => {})
        .delete(() => {}) */

    /* 
    
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
    }) */
}
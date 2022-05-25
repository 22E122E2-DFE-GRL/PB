const bcrypt = require('bcrypt-nodejs');
const { response } = require('../server');

module.exports = app => {

    // Model
    // app é a instância de express
    // app.db acessa o mongoose
    const Usuario = app.db.model(
        'usuarios' // nome do modelo ou da coleção
        , {
            nome: String,
            senha: String,
            email: String,          // usuário
            created_at: Date,
            updated_at: Date, 
            deleted_at: Date,       // soft delete
        } // estrutura dos documentos desta coleção
    );

    // listar
    const list = (req, res, next) => {
        Usuario.find().then(response => res.json(response));
    }

    // salvar
    const save = (req, res, next) => {
        const usuario = new Usuario(req.body);
        console.log(req.body);
        console.log(usuario);
        usuario.senha = passwordHash(usuario.senha);
        usuario.created_at = new Date();
        usuario.updated_at = usuario.created_at;
        usuario.save().then(usuario => res.status(201).json(usuario));
    }

    // atualizar ...
    const update = (req, res, next) => {
        const _id = app.db.Types.ObjectId(req.params.id)
        const usuario = req.body // conteudo para atualização

        if (usuario.senha)
            usuario.senha = passwordHash(usuario.senha)

        usuario.updated_at = new Date();

        Usuario
            .updateOne({_id}, {$set: usuario})
            .then(response => res.json(response))
    }
    
    const passwordHash = password => {
        const salt = bcrypt.genSaltSync(4)
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }

    return { Usuario, list, save, update }
}
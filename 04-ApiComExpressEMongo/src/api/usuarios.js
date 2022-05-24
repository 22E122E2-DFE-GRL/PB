module.exports = app => {

    // listar
    const list = (req, res, next) => {
        res.json('Lista de usuários.')
    }

    // salvar
    const save = (req, res, next) => {
        res.json('Usuário salvo.')
    }   

    // atualizar ...
    // const update = (req, res, next) => {
    // }  

    return { list, save }
}
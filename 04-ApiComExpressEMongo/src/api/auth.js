const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple')
const { AUTH_SECRET } = require('../.env')

module.exports = app => {

    // POST  http/signin { username, password }
    const signin = async (req, res) => {
        const { email, senha } = req.body;
        const validInfo = email && senha;
        if (!validInfo) return res.status(400).json("Dados incompletos!");

        // Usuario é um model do mongoose
        const user = await app.src.api.usuarios.Usuario.findOne({ email })
        if (!user) return res.status(404).json("Usuário não encontrado!")

        const validPass = bcrypt.compareSync(senha, user.senha)
        if (!validPass) return res.status(401).json("Usuário e senha inválidos.")

        const now = Date.now() // long mls data de ref até hoje 1548745487
        const payload = {
            _id: user._id,
            nome: user.nome,
            email: user.email,
            iat: now,
            exp: now + (60 * 60 * 12) * 1000 // 24 horas
        }
        const token = jwt.encode(payload, AUTH_SECRET)
        res.json({...payload, token })  
    }

    const validate = (req, res) => {
        const {token} = req.body
        const userToken = jwt.decode(token, AUTH_SECRET)
        const validade = new Date(userToken.exp)
        const now = Date.now()
        if (validade > now)
            return res.json({token: true})
        return res.json({ token: false })
    }

    return { signin, validate }
}
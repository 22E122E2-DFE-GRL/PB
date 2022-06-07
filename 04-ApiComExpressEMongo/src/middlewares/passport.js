const { AUTH_SECRET } = require('../.env');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const { Strategy, ExtractJwt }  = require('passport-jwt');

// app -> express
module.exports = app => {

    const params = {
        secretOrKey: AUTH_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };

    const strategy = new Strategy(params, (payload, done) => {
        const _id = payload._id;
        app.src.api.usuarios.Usuario.findOne({_id})
            .then(usuario => done(null, usuario ? { ...payload } : false))
            .catch(err => done(err, false));
    });

    passport.use(strategy);

    return {
        auth: () => passport.authenticate('jwt', { session: false })
    }
}
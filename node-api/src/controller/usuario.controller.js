module.exports = app => {
    const Usuario = require('../business/usuario.business');
    const base = '/usuario/';

    app.get( base + 'consulta-usuario', Usuario.consulta);
}
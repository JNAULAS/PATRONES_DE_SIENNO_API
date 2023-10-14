const usuario = require('../Component/usuario/interface')
const pais = require('../Component/pais/interface')

const routes = function( server ) {
    server.use('/usuario', usuario),
    server.use('/pais', pais)
}

module.exports = routes
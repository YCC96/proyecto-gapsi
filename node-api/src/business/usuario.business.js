exports.consulta = (req, res) => {
    var dataResult = {
        cve_Error: 0,
        cve_Mensaje: 'Exito al consultar usuario',
        response: {
            nombre: 'Bienvenido Candidato 01',
            version: '1.0.0'
        }
    }

    res.send(dataResult)
}
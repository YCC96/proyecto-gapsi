const ProveedorService = require('../service/proveedor.service')

exports.consulta = (req, res) => {
    ProveedorService.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving proveedores."
        });
        else res.send(data);
    })
}

exports.agregar = (req, res) => {
    
    ProveedorService.getAll((err, data) => {
        var cadena = req.body.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "");
        var idBuscar = data.response.map((item) => {
            return item.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "")
            }).indexOf(cadena);

        if (idBuscar >= 0) {
            var dataResult = {
                cve_Error: 1,
                cve_Mensaje: 'El provedor ya existe.',
                response: null
            }
            res.send(dataResult);
        } else {
            ProveedorService.create(req.body, (err, data) => {
                if (err)
                    res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving proveedores."
                });
                else res.send(data);
            })
        }
        
    });
}

exports.eliminar = (req, res) => {
    ProveedorService.delete(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving proveedores."
        });
        else res.send(data);
    })
}
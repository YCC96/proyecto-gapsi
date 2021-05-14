module.exports = app => {
    const Proveedores = require('../business/proveedores.business');
    const base = '/proveedores/';

    app.get( base + 'consulta-proveedores', Proveedores.consulta);
    app.post( base + 'agregar-proveedor', Proveedores.agregar);
    app.delete( base + 'eliminar-proveedor/:id', Proveedores.eliminar);
}
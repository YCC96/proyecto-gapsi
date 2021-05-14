const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const utils = require('../utils/validations.utils');
const urlDBJson = 'bd.json'

const ProveedorService = function(proveedorService) {
}

function consultaDB(){
    let rawdata = fs.readFileSync(urlDBJson);
    return JSON.parse(rawdata);
}

function actualizaDB(data){
    fs.writeFileSync(urlDBJson, JSON.stringify(data));
}

ProveedorService.getAll = result => {
    let proveedor = consultaDB();
    var dataResult = {
        cve_Error: 0,
        cve_Mensaje: '',
        response: proveedor
    }

    result(null, dataResult)
}

ProveedorService.create = (newProveedor, result) => {
    let proveedor = consultaDB();
    let newItem = {
        id: uuidv4(),
        ...newProveedor
    }
    proveedor.push(newItem);
    actualizaDB(proveedor);

    var dataResult = {
        cve_Error: 0,
        cve_Mensaje: '',
        response: newItem
    }

    result(null, dataResult)
}

ProveedorService.delete = (id, result) => {
    let proveedor = consultaDB();

    var idBuscar = proveedor.map((item) => { return item.id; }).indexOf(id)

    var dataResult = {
        cve_Error: 0,
        cve_Mensaje: '',
        response: null
    }

    if (idBuscar == -1) {
        dataResult.cve_Error = 1;
        dataResult.cve_Mensaje = 'No existe el id';
    } else {
        proveedor.splice(idBuscar, 1);
        actualizaDB(proveedor);
        dataResult.cve_Mensaje = 'Elemento eliminado con éxito';
    }
    result(null, dataResult)
    
}

module.exports = ProveedorService;
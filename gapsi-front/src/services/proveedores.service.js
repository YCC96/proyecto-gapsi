import axios from 'axios';

export function _consultaProvedores(){
    return new Promise ((resolve, reject) => {
        var jsonResponse = {
            status: 0,
            message: '',
            data: null
        }
        const urlService = process.env.REACT_APP_BACK_HOST + 'proveedores/consulta-proveedores';
        axios({
            headers: {
              "Content-Type": "application/json",
            },
            method: "get",
            url: urlService,
            //data: JSON.stringify(data)
          })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
              if (error.response === undefined) {
                jsonResponse.message = error + "";
                jsonResponse.status = 0;
              } else {
                jsonResponse.message = error.response.statusText;
                jsonResponse.status = error.response.status;
                jsonResponse.errorCode = error.response.data.errorCode;
              }
              reject(jsonResponse);
            });
    });
}

export function _agregarProvedor(data){
  return new Promise ((resolve, reject) => {
      var jsonResponse = {
          status: 0,
          message: '',
          data: null
      }
      const urlService = process.env.REACT_APP_BACK_HOST + 'proveedores/agregar-proveedor';
      axios({
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          url: urlService,
          data: JSON.stringify(data)
        })
          .then(res => {
              resolve(res.data);
          })
          .catch(error => {
            if (error.response === undefined) {
              jsonResponse.message = error + "";
              jsonResponse.status = 0;
            } else {
              jsonResponse.message = error.response.statusText;
              jsonResponse.status = error.response.status;
              jsonResponse.errorCode = error.response.data.errorCode;
            }
            reject(jsonResponse);
          });
  });
}

export function _eliminarProveedor(id){
  return new Promise ((resolve, reject) => {
      var jsonResponse = {
          status: 0,
          message: '',
          data: null
      }
      const urlService = process.env.REACT_APP_BACK_HOST + 'proveedores/eliminar-proveedor/' + id;
      axios({
          headers: {
            "Content-Type": "application/json",
          },
          method: "delete",
          url: urlService,
          //data: JSON.stringify(data)
        })
          .then(res => {
              resolve(res.data);
          })
          .catch(error => {
            if (error.response === undefined) {
              jsonResponse.message = error + "";
              jsonResponse.status = 0;
            } else {
              jsonResponse.message = error.response.statusText;
              jsonResponse.status = error.response.status;
              jsonResponse.errorCode = error.response.data.errorCode;
            }
            reject(jsonResponse);
          });
  });
}
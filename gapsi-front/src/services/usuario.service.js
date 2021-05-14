import axios from 'axios';

export function _consultaPersonas(){
    return new Promise ((resolve, reject) => {
        var jsonResponse = {
            status: 0,
            message: '',
            data: null
        }
        const urlService = process.env.REACT_APP_BACK_HOST + 'usuario/consulta-usuario';
        axios({
            headers: {
              "Content-Type": "application/json",
            },
            method: "get",
            url: urlService,
          })
            .then(res => {
                resolve(res.data.response);
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
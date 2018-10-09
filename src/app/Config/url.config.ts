
var env = true;
var host = "";
if (env) {
    host = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port+'/';
}else{
    host = 'http://localhost:5000/';
}

export const baseUrl = host;
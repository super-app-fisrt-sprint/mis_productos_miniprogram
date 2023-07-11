let requestParameter = getApp();
module.exports = class APIs {
  static get URL_BASE() {
    return URL_BASE;
  };
  static get HEADER_PARAMS(){
    return HEADER_PARAMS;
  }
}

const URL_BASE = {
  URL_API_CONSULTA_SER_CLIENTE_NEW: 'https://apiselfservice.co/api/index.php/v1/soap/consultaSerClienteNew.json'
};


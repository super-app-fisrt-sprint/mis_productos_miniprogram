module.exports = class ServiceCategory {
  static instance;
  constructor (categoriaTelefonia,categoriaInternet,categoriaTelevision) {
    this.categoriaTelefonia = categoriaTelefonia;
    this.categoriaInternet = categoriaInternet;
    this.categoriaTelevision = categoriaTelevision;
  }
    updateParams(params) {
      Object.assign(this, params);
    }
  }

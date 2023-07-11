module.exports = class ServiceCategory {
  static instance;
  constructor (categoriaTelefonia,categoriaInternet,categoriaTelevision) {
    this.categoriaTelefonia = categoriaTelefonia;
    this.categoriaInternet = categoriaInternet;
    this.categoriaTelevision = categoriaTelevision;
   
    if (ServiceCategory.instance) {
      return User.instance
    } else {
      ServiceCategory.instance = this
    }
  }
    updateParams(params) {
      Object.assign(this, params);
    }
  }

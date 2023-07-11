const userServiceRemote = require('../source/UserServiceRemote');
const api = require('../../../config/remote/APIs');

module.exports = class UserServiceDataSourceRemote {
  static instance;
  constructor () {
    if (UserServiceDataSourceRemote.instance) {
      return UserServiceDataSourceRemote.instance
    } else {
        UserServiceDataSourceRemote.instance = this
    }
  }
  async GetUserServices(data,deviceSpect) {
    return await userServiceRemote.consultaSerClienteNew(api.URL_BASE.URL_API_CONSULTA_SER_CLIENTE_NEW,data,deviceSpect)
  }
} 
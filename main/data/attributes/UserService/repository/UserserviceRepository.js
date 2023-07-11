const UserServiceDataSourceRemote = require('../dataSource/UserServiceDataSourceRemote');
const userServiceDatasourceRemote = new UserServiceDataSourceRemote();

module.exports = class UserServiceRepository {
  static instance;
  constructor () {
    if (UserServiceRepository.instance) {
      return UserServiceRepository.instance
    } else {
        UserServiceRepository.instance = this
    }
  }
   async getUserServiceRemote(data,deviceSpect) {
    return  await userServiceDatasourceRemote.GetUserServices(data,deviceSpect);
  }
} 
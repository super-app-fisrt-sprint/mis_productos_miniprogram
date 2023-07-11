module.exports = class HeaderUserService {
  static instance;
  constructor () {
   
   
    if (UserService.instance) {
      return UserService.instance
    } else {
      UserService.instance = this
    }
  }
}
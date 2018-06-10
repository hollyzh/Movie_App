import API from '../API';

const UserActions = {
  login(userInfo) {
    API.login(userInfo);
  },
  getUsers() {
    API.getUsers();
  },
  logout() {
    API.logout();
  },
  register(user){
    API.register(user);
  }
}

export default UserActions;

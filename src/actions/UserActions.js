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
  }
}

export default UserActions;

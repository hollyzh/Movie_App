import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

var _user = null;

class UserStore extends EventEmitter {
  constructor(props) {
    super(props);
    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_USERS':
          _user = action.payload.userInfo;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getUser() {
    return _user;
  }
}

export default new UserStore();

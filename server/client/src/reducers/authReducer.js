import {FETCH_USER} from './../actions/types';
// not sure => null, logged in => user model, not logged => false
// TODO: get userId
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

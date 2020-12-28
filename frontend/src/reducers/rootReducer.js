import { GET_USER, ADD_USER, UPDATE_USER, DELETE_USER, ACTIVATE_USER } from '../actions/actionTypes';

function activatedUser(user) {
  user['state']='active'
	return user;
}
const rootReducer = (state, action) => {
switch(action.type) {

case GET_USER:
return { 
    users: [...action.users]
}
case ADD_USER:
  return {
    ...state,
    users: [...state.users, {...action.user}]
  };
case DELETE_USER:
  return {
    ...state,
    users: state.users
            .filter(m => m.id !== action.id)
  };

case UPDATE_USER:
      return {
      ...state,
      users: state.users.map((userObj) => 
    userObj.id === +action.user.id ? action.user : userObj
    )
  }

case ACTIVATE_USER:
  return {
    ...state,
    users: state.users.map((user) => 
  user.id === action.user.id ? activatedUser(action.user) : user
  )
}

default:
    return state;
}

}

export default rootReducer;
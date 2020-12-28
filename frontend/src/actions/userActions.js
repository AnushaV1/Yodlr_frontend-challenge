import { GET_USER, ADD_USER, UPDATE_USER, DELETE_USER, ACTIVATE_USER } from "./actionTypes";

function getUser(users) {
  return {
    type: GET_USER,
    users
  };
}


function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

function removeUser(id) {
  return {
    type: DELETE_USER,
    id
  };
}

function updateUser(user) {
    return {
      type: UPDATE_USER,
      user
    };
  }

  function activateUser(user) {
  return {
      type: ACTIVATE_USER,
      user
    };
  }



export { getUser, addUser, removeUser, updateUser, activateUser };

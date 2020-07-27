import {
  SET_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
  ADD_ROLE
} from '../constants';

// Set Role
export function setRole(roleDetails) {
  return {
    type: SET_ROLE,
    payload: {
      roleDetails
    },
  };
}
// Add Role
export function addRole(roleDetails) {
  return {
    type: ADD_ROLE,
    payload: {
      roleDetails
    },
  };
}
// Update Role
export function updateRole(roleDetails) {
  return {
    type: UPDATE_ROLE,
    payload: {
      roleDetails
    },
  };
}

// Delete Role
export function deleteRole(roleDetails) {
  return {
    type: DELETE_ROLE,
    payload: {
      roleDetails
    },
  };
}
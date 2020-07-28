import { SET_ROLE,        
  UPDATE_ROLE,
  DELETE_ROLE,
  ADD_ROLE, } from '../constants';

const initialState = {
  roleList: [
  ]
};

export default function setBrowserInfo(state = initialState, action) {

  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        roleList: [...state.roleList, action.payload.roleDetails],
      };
    case ADD_ROLE:
    console.log("ADD_ROLE",action)
      return {
        ...state,
        roleList: [action.payload.roleDetails],
      };
    case DELETE_ROLE:
      return {
        ...state,
        roleList: [action.payload.roleDetails],
      };
    case UPDATE_ROLE:
      return {
        ...state,
        roleList: [action.payload.roleDetails],
      };
    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import login from './login';
import role from './role'
export default combineReducers({
    login,
    role,
})
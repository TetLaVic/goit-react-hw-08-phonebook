import axios from 'axios';
import authActions from 'auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {};

const register = credentials => dispatch => {};

const login = credentials => dispatch => {};

const logout = credentials => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default { register, login, logout, getCurrentUser };

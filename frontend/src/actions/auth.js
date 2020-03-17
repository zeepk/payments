import axios from 'axios';
import { returnErrors } from './messages';

import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from './types';

// check token and load user
export const loadUser = () => (dispatch, getState) => {
	// user loading
	dispatch({ type: USER_LOADING });

	axios
		.get('/api/auth/user', tokenConfig(getState))
		.then(res => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};

// login user
export const login = (username, password) => dispatch => {
	// send headers with request
	const config = {
		headers: {
			'content-type': 'application/json'
		}
	};

	// request body
	const body = JSON.stringify({
		username,
		password
	});

	axios
		.post('/api/auth/login', body, config)
		.then(res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL
			});
		});
};

// register user
export const register = ({ username, password, email }) => dispatch => {
	// send headers with request
	const config = {
		headers: {
			'content-type': 'application/json'
		}
	};

	// request body
	const body = JSON.stringify({
		username,
		password,
		email
	});

	axios
		.post('/api/auth/register', body, config)
		.then(res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: REGISTER_FAIL
			});
		});
};

// logout user
export const logout = () => (dispatch, getState) => {
	axios
		.post('/api/auth/logout/', null, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: LOGOUT_SUCCESS
			});
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

//setup config with token - helper function
export const tokenConfig = getState => {
	// get token from state
	const token = getState().auth.token;

	// send headers with request
	const config = {
		headers: {
			'content-type': 'application/json'
		}
	};

	// if token, add to headers
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
};

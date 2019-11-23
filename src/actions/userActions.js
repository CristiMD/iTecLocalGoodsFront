import { LOGIN_SUCCESS, LOGOUT } from './types';
import  { history }  from '../functions/History';
import  axios  from 'axios';

export const login = (email, password) => dispatch => {
    axios.post('http://itec.ro/api/login' ,{
        email: email,
        password: password
    }).then(res => {
        localStorage.setItem('user', JSON.stringify(res.data));
        history.push('/');
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
}

export const register = (email, password, name, phone) => dispatch => {
    axios.post('http://itec.ro/api/register' ,{
        email: email,
        password: password,
        name: name,
        phone: phone
    }).then(res => {
        history.push('/login');
    })
}

export const updateProfile = (email, password, name, phone) => dispatch => {
    axios.post('http://itec.ro/api/register' ,{
        email: email,
        password: password,
        name: name,
        phone: phone
    }).then(res => {
        history.push('/account');
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
}

export const isLoggedIn = (user) => dispatch => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user
        })
}

export const logout = () => dispatch => {
    localStorage.removeItem('user');
    dispatch({
        type: LOGOUT,
        payload: ''
    })
}
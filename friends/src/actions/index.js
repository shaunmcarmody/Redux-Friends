import axios from 'axios';

export const ERROR = 'ERROR';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_SUCCESSFUL = 'FETCHING_SUCCESSFUL';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
}

export const login = creds => dispatch => {
    dispatch({ type: LOGGING_IN });
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.payload })
        })
        .catch(err => {
            dispatch({ type: Error, payload:  { error: err.message, loggingIn: false }});
        })
}

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload:  { error: err.message, fetchingFriends: false }});
        })

}
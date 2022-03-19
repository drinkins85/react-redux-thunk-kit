import axios from 'axios';
export const getUsers = () => (dispatch) => {
    dispatch({ type: 'GET_USERS_START' })
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
        })
        .catch(() => {
            dispatch({ type: 'GET_USERS_FAIL' });
        })
}
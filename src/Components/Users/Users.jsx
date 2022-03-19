import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users/actions';

const Users = () => {
    const dispatch = useDispatch();
    const handleGetUsers = () => {
        dispatch(getUsers());
    };

    const userData = useSelector((state) => state.users);

    return (
        <div>
            <button onClick={handleGetUsers}>get users</button>
            {userData.isLoading && <div>loading...</div>}
            {Array.isArray(userData.users) && userData.users.length > 0 && userData.users.map((user) => (
                <div key={user.id}>{user.name} - {user.email}</div>
            ))}
        </div>
    );
}

export default Users;

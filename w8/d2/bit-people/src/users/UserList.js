import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
    return (
        <div>{props.users.map((e) =>
            <UserItem user={e} key={e.id} />)}
        </div>
    )
}

export default UserList;
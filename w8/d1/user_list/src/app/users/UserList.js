import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {
    return (
        <div>
            {props.items.map((e) => <UserListItem item={e}/>)}
        </div>
    )
}

export default UserList;
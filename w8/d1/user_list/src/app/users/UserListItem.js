import React from 'react';

const UserListItem = (props) => {
    return (
        <div>
            <div className="collection-item avatar">
                <img src={props.item.picture.thumbnail} alt="" className="circle" />
            </div>
                <span className="title">name: {props.item.name.first} </span>
                <p>email: {props.item.email} <br />
                date of birth: {props.item.dob}
      </p>
        </div>
    )
}

export default UserListItem;  



            
            
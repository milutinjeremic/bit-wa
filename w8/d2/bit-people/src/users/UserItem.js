import React from 'react';
import "./userInfo.css";
// import User from '../entities/user';

const UserItem = (props) => {
    const bgColor = {
        backgroundColor: props.user.gender === "female" ? "#ffebee" : "#fff"
    }
    return (
        <ul className="collection">
            <div className="collection-item avatar" style={bgColor}>
                <img src={props.user.smallPhoto} alt="" className="circle" />
                <p className="title">{props.user.firstName} {props.user.lastName}</p>
                <span className="title"><i className="material-icons">email</i>: {props.user.email} <br />
                </span>
                <p><i className="material-icons">cake</i>{props.user.bDay}</p>
            </div>
        </ul>
    )
}

export default UserItem;

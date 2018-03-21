import React from 'react';
import './userInfo.css'


const UserCard = (props) => {
    const bgColor = {
        backgroundColor: props.user.gender === "female" ? "#ffebee" : "#fff"
    }
    return (
        <div className="col s12 m4">
            <div className="card" style={bgColor}>
                <div className="card-image">
                    <img src={props.user.photo} alt="slika"/>
                    <span className="card-title">{props.user.firstName}</span>
                </div>
                <div className="card-content">
                    <p>{props.user.email}</p>
                    <p>Birth date: {props.user.bDay}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
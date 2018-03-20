import React from 'react';


const UserCard = (props) => {
    return (
        <div className="col s12 m4">
            <div className="card">
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
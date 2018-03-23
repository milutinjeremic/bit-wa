import React from 'react';
import {Link} from 'react-router-dom';
const Authors = () => {
    return(
        <div className="collection">
        <p><Link to='/authorDetailsPage'>Name Surname1</Link></p>
        <p><a  className="collection-item">Name Surname</a></p>
        <p><a  className="collection-item">Name Surname</a></p>
        <p><a  className="collection-item">Name Surname</a></p>
        <p><a  className="collection-item">Name Surname</a></p>
      </div>
    )
}

export default Authors;
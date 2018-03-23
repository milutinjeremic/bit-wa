import React from 'react';
import {Link} from 'react-router-dom';

const AuthorDetailsPage = () => {
    return (
        <ul className="collection">
        <Link to='/Home'> &larr; Back </Link>
            <li className="collection-item avatar">
                <i className="material-icons circle">folder</i>
                <span className="title">Name Surname</span>
                <p>Username: my_cool_username</p>
                <p>Email: my_cool@email</p>
                <p>Phone:1-123-123-1234</p>
              
            </li>
            <li className="collection-item avatar">
                <p className="title">Address</p>
                <p>Street: bla bla bla</p>
                <p>City: bla bla bla</p>
                <p>Zipcode: bla bla bla</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11308.766883209351!2d20.452567000000002!3d44.8787472!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1521814725997" width="200" height="100" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </li>
            <li className="collection-item avatar">
                
                <span className="title">Company</span>
                <p>Name: bla bla </p>
                <p>Slogan:</p>
                
            </li>
        </ul>
    )
}

export default AuthorDetailsPage;
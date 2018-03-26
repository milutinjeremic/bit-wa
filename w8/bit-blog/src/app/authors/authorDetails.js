import React, { Component } from 'react';
import { authorService } from '../AuthorService';
import { Link } from 'react-router-dom'

class AuthorDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        authorService.fetchAuthor(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    author: response
                })
            }
            )
    }

    renderAuthor() {
        if (this.state.author) {
            return (
                <div>
                    <li className="collection-item avatar">
                        <i className="material-icons circle">folder</i>
                        <span className="title"></span>
                        <p>Username: {this.state.author.username}</p>
                        <p>Email: {this.state.author.email}</p>
                        <p>Phone: {this.state.author.phone}</p>
                    </li>
                    <li className="collection-item avatar">
                        <p className="title">Address</p>
                        <p>Street: {this.state.author.address.street}</p>
                        <p>City: {this.state.author.address.city}</p>
                        <p>Zipcode: {this.state.author.address.zipcode}</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11308.766883209351!2d20.452567000000002!3d44.8787472!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1521814725997" width="200" height="100" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                    </li>
                    <li className="collection-item avatar">
                        <span className="title">Company</span>
                        <p>Name: {this.state.author.company.name}</p>
                        <p>Slogan:  {this.state.author.company.slogan}</p>
                    </li>
                </div>
            )
        }
        else{
            return "";
        }
    }

    render() {
        console.log(this.state.author)
        return (
            <div className='card-panel'>
                <ul className="collection">
                    <Link to='/Home'> &larr; Back </Link>
                    

                    {this.renderAuthor()}



                </ul>
            </div>
        )
    }
}


export default AuthorDetails;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { authorService } from '../AuthorService';


class Authors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }

    }

    componentDidMount() {
        authorService.fetchAuthors()
            .then((response) => {
                console.log(response)
                this.setState({
                    authors: response
                })
            })

    }

    render() {
        return (
            <div>
                <div className="collection">
                    {this.state.authors.map(authorData => {
                        return <Link to={`/AuthorDetailsPage/${authorData.authorId}`}><p>{authorData.fullName}</p></Link>
                    })}
                </div>
            </div>
        )
    }
}

export default Authors;
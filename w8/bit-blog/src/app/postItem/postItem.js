import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <Link to='/Home'> &larr; Back </Link>
                                <h2 className="card-title center">Post Title</h2>
                                <p className="title center"><a>Author Name</a></p>
                                <br/>
                                <p className="title center">I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <hr />
                            <p>3 more post from the same author</p>

                            <a>This is a link</a>
                            <br />
                            <a>This is a link</a>
                            <br />
                            <a>This is a link</a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PostItem;
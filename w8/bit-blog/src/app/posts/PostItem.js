import React from 'react';
import { Link } from 'react-router-dom';


const PostItem = (props) => {
    return (

        <div className="card-panel">
            <h6 className="title left"><Link to={'/PostDetails/' + props.post.id}>{props.post.title}</Link></h6>
            <br />
            <p>{props.post.bodyShort}</p>
        </div >
    )
}

export default PostItem;
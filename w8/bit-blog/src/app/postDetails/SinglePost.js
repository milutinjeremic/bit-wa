import React from 'react';
import { Link } from 'react-router-dom';


const SinglePost = (props) => {
    return (

        <div className="card-panel">

            {props.post ? (

                <div className="container">


                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <Link to='/Home'> &larr; Back </Link>
                            <h5>{props.post.title}</h5>

                            <Link to='/authorDetailsPage'>jj</Link>
                            <p>{props.post.body}</p>
                            <hr />
                            <p> 3 more posts from same author </p>
                            <Link to=''>Author Posts1</Link><br/>
                            <Link to=''>Author Posts2</Link><br/>
                            <Link to=''>Author Posts3</Link>

                        </div>
                    </div>
                </div>
            ) : (
                    <h1>Loading</h1>
                )}


        </div >
    )
}

export default SinglePost;


// <div className="container">
//     <div className="row">
//         <div className="col s12 m12">
//             <div className="card blue-grey darken-1">
//                 <div className="card-content white-text">
//                     <Link to='/Home'> &larr; Back </Link>
//                     <h5>{props.post.title}</h5>
//                     <hr />
//                     <Link to=''>Author Name</Link>
//                     <p> 3 more posts from same author </p>
//                     <Link to=''>Author Posts1</Link>
//                     <Link to=''>Author Posts2</Link>
//                     <Link to=''>Author Posts3</Link>

//                 </div>
//             </div>
//         </div>


//     </div>
//     </div>
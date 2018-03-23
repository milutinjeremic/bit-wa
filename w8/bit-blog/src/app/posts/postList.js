import React from 'react';
import {Link} from 'react-router-dom';

const PostList = () => {
    return(
        <div>
            <div className="container">
        <h3 className="title center">POSTS</h3>
        <ul className="collection">
       
        <h1 className="title left"><Link to='/PostItem'> Title 1</Link></h1>
          <br/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </p>
        
        </ul>
        <ul className="collection">
       
       <h1 className="title left">Title 1</h1>
       <br/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
       </p>
     
     </ul>
     <ul className="collection">
       
       <h1 className="title left">Title 1</h1>
       <br/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
       </p>
     
     </ul>
     <ul className="collection">
       
       <h1 className="title left">Title 1</h1>
       <br/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
       </p>
     
     </ul>
        </div>
        </div>
    )
}

export default PostList;
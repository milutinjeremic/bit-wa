import React from 'react';
import { Link } from 'react-router-dom';
// 
const NewPost = () => {
    return(
        <div>
            <div className="container">
            <h3>NEW POST</h3>
            <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <p>Title</p>
            <input id="input_text" type="text" data-length="10" placeholder="Title"/>
            
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
         <p>Content</p>
            <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
            
          </div>
        </div>
        <a className="waves-effect waves-light btn"><Link to='/Home'>Cancel</Link></a>
        <a className="waves-effect waves-light btn"><Link to='/Home'>Save</Link></a>
      </form>
    </div>
            </div>
            </div>
    )
}

export default NewPost;
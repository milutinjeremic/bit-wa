import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo center">{props.title}</h1>
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/About'>About</Link></li>
                    <li><a onClick={props.handleRefresh}><i className="material-icons">refresh</i></a></li>
                    <li><a onClick={props.handleToggle}><i className="material-icons">{props.showList ? "view_list" : "view_module"}</i></a></li>
                 
                </ul>
            </div>
        </nav>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;



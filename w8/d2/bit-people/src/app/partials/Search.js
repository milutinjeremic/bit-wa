import React from 'react';

const Search = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">search</i>
                        <input type="text" value={props.inputValue} onChange={props.handleChange} id="autocomplete-input" placeholder="Search users" className="autocomplete" />
                        <label htmlFor="autocomplete-input" ></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;

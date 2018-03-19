import React from 'react';
import PropTypes from 'prop-types';

const BlogListItem = (props) => {
    return (
        <div>
            <h2>{props.item.id} - {props.item.title}</h2>
            <p>{props.item.body}</p>
        </div>
    )
}

BlogListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
    })
}

export default BlogListItem;
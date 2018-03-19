import React from 'react';
import BlogListItem from './BlogListItem';
import PropTypes from 'prop-types';

const BlogList = (props) => {
    return (
        <div>{props.items.map((e) => <BlogListItem item={e} key={e.id} />)}</div>
    )
}

BlogList.propTypes = {
    items: PropTypes.array,

};

export default BlogList;

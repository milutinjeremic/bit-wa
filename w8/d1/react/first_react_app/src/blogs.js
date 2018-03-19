import postsData from './posts';

const BlogListItem = (props) => {
    return (
        <div>
            <h2>{props.item.id} - {props.item.title}</h2>
            <p>{props.item.body}</p>
        </div>
    )
}

const BlogList = (props) => {
    return (
        <div> {props.items.map((e) => <BlogListItem item={e} key={e.id} />)}</div>
    )
}
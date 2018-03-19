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

const App = (props) => {
    return (
        <div>
            <h1>Blog List</h1>
            <BlogList items={postsData} />
            
        </div>
    )
}

const rootEl = document.getElementById("root");
ReactDOM.render(<App />, rootEl);

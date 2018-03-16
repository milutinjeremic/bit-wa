const ShoppingListItem = (props) => {
    return (
        <li>{props.item}</li>
    )
}

const ShoppingList = (props) => {
    //const items = ["banana", "apple", "watermelon", "kiwi"];

    return(
        <ul>
            {
                props.items.map( (e) => <ShoppingListItem item={e}/>)
                //console.log(props)
            }

            {/* <ShoppingListItem item={'banana'}/>
            <ShoppingListItem item={'apple'}/>
            <ShoppingListItem item={'watermelon'}/> */}
        </ul>
    )
}

const App = (props) => {
    return (
        <div>
            <h1>Hello</h1>
            <ShoppingList items={["banana", "apple", "watermelon", "kiwi"]}/>
        </div>
    )
}

const elGet = document.getElementById("root");

ReactDOM.render(<App />, elGet);
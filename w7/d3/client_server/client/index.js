var url = "http://127.0.0.1:3010";

var getBlog = function (url, handleBlog) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            handleBlog(jsonObject);
        })
}

getBlog(url, (blogs) => {
    console.log(blogs);
    
    displayBlogs(blogs);
});
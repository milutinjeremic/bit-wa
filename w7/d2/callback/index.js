var url = 'http://api.tvmaze.com/shows/4'

//dataModule
var getMovie = function (url, handleMovie) {
    fetch(url)
        .then(function (httpResponse) {
            return httpResponse.json()
        })
        .then(function (rawMovieObject) {
            //var movie = {
            //name: rawMovieObject.name,
            // id:rawMovieObject.id
            //};
            handleMovie({
                name: rawMovieObject.name,
                id: rawMovieObject.id
            });
        })
}


//mainModule
var handleRealMovieObject = function (movie) {//movie preuzima vrednost handleMovie //
    
console.log("name: " + movie.name)
}

getMovie(url, handleRealMovieObject);
console.log("other work")
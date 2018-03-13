var url = 'http://api.tvmaze.com/shows/15'

var getMovie = function (url, handleMovie) {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function(rawResponse) {
            var movie = {
                name: rawResponse.name,
                url: rawResponse.url,
                id: rawResponse.id
            };

            handleMovie(movie);
        })
    }

    var handleMovieObject = function (movie) { //movie preuzima vrednost handleMovie //
    
        console.log("name: " + movie.url)
    }

    getMovie(url, handleMovieObject);
    

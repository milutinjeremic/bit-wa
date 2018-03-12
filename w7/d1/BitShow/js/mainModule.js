
    // init
    // initSinglePage
    //ajax 
import {TVShows, Show, createTVShows, createShow} from "./dataModule.js";
import {printAllShows, printSearchResults,  printSeasons, printCast, showImg, printDescription, printShowName} from "./UIModule.js";

    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        var request = $.get(allShowsUrl);
        request.done(function (response) {
            let allShows = response;
            console.log(allShows);
            let show = createTVShows(allShows);
            printAllShows(show.shows);

            $(".show-container img").on("click", function (){
                localStorage.setItem("id", $(this).attr("data-id"));
                location.href = "infopage.html"; 
            });
        });
    });

    

    //function searchForShow() {
    $("#search").on('keyup', function () {

        var searchValue = $("#search").val();
        let showUrl = `http://api.tvmaze.com/search/shows?q=${searchValue}`;

        var request = $.get(showUrl);
        request.done(function (response) {
            response.length = 10;
            printSearchResults(response);
            attachListeners();
            //console.log(response);
        });
        // dataModule.createShow(response[0].show.name, response[0].show.image.original, 
        //     response[0].show.id, response[0].show.summary)
    });


    // response for seasons
function attachListeners() {
    $("li").on('click', function () {
        
        localStorage.setItem('id', $(this).attr("value"));
        location.href = "infopage.html";
    });
}

var searchValue = localStorage.getItem('id');

let showUrl = `http://api.tvmaze.com/shows/${searchValue}/seasons`;
let seasonList = $("#season-list");

var request = $.get(showUrl);
request.done(function (seasonsInfo) {
    //console.log(seasonsInfo);

    printSeasons(seasonsInfo);
});

let castUrl = `http://api.tvmaze.com/shows/${searchValue}/cast`;
let castList = $("#cast-list");
request = $.get(castUrl);
request.done(function (response) {
    console.log(response);
    printCast(response);
});

let showUrlImg = `http://api.tvmaze.com/shows/${searchValue}`//`http://api.tvmaze.com/shows/${searchValue}`;
request = $.get(showUrlImg);
request.done(function (response) {
    console.log(response);
    showImg(response);
});

let descriptionUrl = `http://api.tvmaze.com/shows/${searchValue}`
request = $.get(descriptionUrl);
request.done(function (response) {
    console.log(response);
    printDescription(response);
});

let showNameUrl = `http://api.tvmaze.com/shows/${searchValue}`
request = $.get(showNameUrl);
request.done(function (response) {
    console.log(response);
    printShowName(response);
});

    

    

    // var responseForSeason = [response[0].premierDate, response[0].endDate];
    // console.log(responseForSeason);
    //}

    // return {
    //     init,
    //     initSinglePage
    // }

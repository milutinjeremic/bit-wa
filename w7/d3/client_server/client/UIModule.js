const displayBlogList = (blogList) => {
    blogList.forEach(element => {
        var d = $("<div>");
        var h = $("<h5>");
        var p = $("<p>");
        $(h).text(element.title);
        $(p).text(element.lead);
        $(d).append(h);
        $(d).append(p);
        $(container).append(d)
    }
}
var header = $("#header");
function printAllTexts(arr) {
    arr.forEach( (el) => {
        let printDiv = `<div class="text-container"><h2>${el.title}</h2><p>${el.lead}</p></div>`
    });
}
console.log(arr);
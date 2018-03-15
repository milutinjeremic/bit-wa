const displayBlogs = (blogs) => {

    blogs.forEach(element => {
        
        var d = $("<div>");
       
        var h = $("<h5>");
        var p = $("<p><br>");
        $(h).text(element.title);
        $(p).text(element.lead);
        $(d).append(h);
        $(d).append(p);
        $("#main").append(d);
    });
    
    }
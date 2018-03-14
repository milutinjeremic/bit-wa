fetch("http://127.0.0.1:3010/")
    .then((response) => {
        return response.json();
    }).then((blogList) => {
        console.log(blogList);
    });

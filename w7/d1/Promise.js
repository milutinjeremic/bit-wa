const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hi")
    }, 100)
});

myFirstPromise.then((response) => {
    console.log(response);
});
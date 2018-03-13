for (let i = 0; i < 10; i++) {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(i)
        }, Math.floor((Math.random() * 500) + 1))
    });
    myPromise.then(function (resolveResult) {
        console.log('ID' + resolveResult);
    })

}

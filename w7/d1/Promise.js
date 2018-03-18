let counter = 0;
for (let i = 0; i < 10; i++) {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(i)
        }, Math.floor((Math.random() * 500) + 1))
    });
    myPromise.then(function (resolveResult) {
        counter++;
        console.log('ID' + resolveResult);
        if(counter == 10){
            console.log("All promises are completed!!!")
        }
    })

}

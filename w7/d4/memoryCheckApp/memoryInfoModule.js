const os = require('os');
let currentCallback;

const myInterval = setInterval(() => {

    const currentFreeMem = os.freemem() / 1024 / 1024;

    if (currentFreeMem < 1500) {
        currentCallback(`ALERT!!! Only free memory is :${currentFreeMem} GB`);
    }
    console.log(currentFreeMem);
}, 1000);

const registerForAlerts = (callbackFunction) => {
    currentCallback = callbackFunction;
}

module.exports.registerForAlerts = registerForAlerts;

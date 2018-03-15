const memoryInfoModule = require('./memoryInfoModule');
var figlet = require("figlet")
memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
});
// const onLowMemory = function(message){
//     console.log(message);
// }

// memoryInfoModule.registerForAlerts(onLowMemory);
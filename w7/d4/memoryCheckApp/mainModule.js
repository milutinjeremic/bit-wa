const memoryInfoModule = require('./memoryInfoModule');
var figlet = require("figlet")
let message = registerForAlerts();
figlet.textSync(message,{
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})
memoryInfoModule.registerForAlerts((message) => {
    console.log(message);
});
// const onLowMemory = function(message){
//     console.log(message);
// }

// memoryInfoModule.registerForAlerts(onLowMemory);
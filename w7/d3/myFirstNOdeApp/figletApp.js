const figlet = require('figlet');

const getOutput = function (){
    return figlet.textSync('Pshiho Luka Ludak',{
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}

module.exports.getOutput = getOutput
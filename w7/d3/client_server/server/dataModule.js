const loremIpsum = require('lorem-ipsum');
const Post = require('./Post');

const generateTitle = function(){
    return loremIpsum({
        units : 'words',
        count : 3
    });
}
const generateLead = function(){
    return loremIpsum({
        units : 'sentences',
        count : 2
    });
}
const generatePosts = function(num){
    let posts = [];

    for(let i = 0; i < num;i++){
        const title = generateTitle();
        const lead = generateLead();

        const post = new Post(title,lead);
        posts.push(post);
    }
    return posts;
}
module.exports = generatePosts;
import bodySlice from '../shared/utils/bodySlice';

class Post {
    constructor(post){
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
        this.bodyShort = bodySlice(post.body);
    }
}

export default Post;
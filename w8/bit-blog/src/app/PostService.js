import Post from './entities/Post';
import { url } from './shared/constants';


class PostService {
    fetchPosts() {
        return fetch(url + "/posts")
            .then(response => response.json())
            .then(responsePosts => {
                return responsePosts.map((post) => {
                    return new Post(post);
                })
            }
            )
    }

    fetchPost(id) {
        return fetch(url + "/posts/" + id)
            .then(response => response.json())
            .then(responsePost => {

                return new Post(responsePost)

            })

    }
}



export const postService = new PostService();
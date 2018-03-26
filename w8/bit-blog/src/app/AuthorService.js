
import { url } from './shared/constants';
import Author from './entities/Author';

class AuthorService {
    fetchAuthors() {
        return fetch(url + "/users")
            .then(response => response.json())
            .then(responseAuthors => {
                return responseAuthors.map((author) => {
                    return new Author(author);
                    
                })
            })
        }
        
        fetchAuthor(id) {
            return fetch(url + "/users/" + id)
            .then(response => response.json())
            .then(responseAuthor => {
                console.log(responseAuthor)
                return new Author(responseAuthor)

            })

    }

}


export const authorService = new AuthorService();
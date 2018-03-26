import Address from './Address';
import Company from './Company';

class Author {
    constructor(user){
        this.authorId = user.id;
        this.username = user.username;
        this.email = user.email;
        this.phone = user.phone;
        this.fullName = user.name;
        this.address = new Address(user.address);
        this.company = new Company(user.company);
    }
}

export default Author;
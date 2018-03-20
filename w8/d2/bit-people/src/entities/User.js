import newDate from '../shared/utils/formatDate';
class User {
    constructor (user) {
        this.id = user.login.username;
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.email = user.email;
        this.bDay = newDate(user.dob);
    }
}

export default User;
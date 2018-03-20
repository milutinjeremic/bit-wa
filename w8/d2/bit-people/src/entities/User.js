import newDate from '../shared/utils/formatDate';
import newMail from '../shared/utils/formatMail';
class User {
    constructor (user) {
        this.id = user.login.username;
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.email = newMail(user.email);
        this.bDay = newDate(user.dob);
    }
}

export default User;
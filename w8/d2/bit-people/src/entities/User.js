import newDate from '../shared/utils/formatDate';
import newMail from '../shared/utils/formatMail';
import formatName from '../shared/utils/formatName';

class User {
    constructor (user) {
        this.id = user.login.username;
        this.photo = user.picture.large;
        this.name = formatName(user.name.first + " " + user.name.last);
        this.email = newMail(user.email);
        this.bDay = newDate(user.dob);
        this.smallPhoto = user.picture.medium;
        // this.lastName = user.name.last;
        this.gender = user.gender;
    }
}

export default User;
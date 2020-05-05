class User {
    constructor(id, firstname, lastname, password, email, phonenumber, studyprogramme_id) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
        this.studyprogramme_id = studyprogramme_id;
    }
}
class UserLogin {
    constructor(password, email) {
        this.password = password;
        this.email = email;
    }
}


module.exports = {
    User: User,
    UserLogin: UserLogin
};
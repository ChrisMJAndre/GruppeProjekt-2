const bcryptjs = require('bcryptjs')

Student.beforeCreate((student, options) => {

    return bcrypt.hash(student.password, 10)
        .then(hash => {
            student.password = hash;
        })
        .catch(err => {
            throw new Error();
        });
});


module.exports = (sequelize, type) => {
    return sequelize.define('student', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: type.String,
            field: 'firstname'
        },
        lastName: {
            type: type.String,
            field: 'lastname'
        },
        password: type.String,
        email: type.String,
        phoneNumber: type.String
    })
}

// const student = sequelize.define('Student', {
//     firstName: {
//         type: DataTypes.STRING
//     },
//     lastName: {
//         type: DataTypes.STRING
//     },
//     password: {
//         type: DataTypes,
//         required: [true, 'Please provide Password']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide Email']
//     },
//     phoneNumber: {
//         type: Number,
//         required: [true, 'Please provide Phone number']
//     },
// })


// const uniqueValidator = require('mongoose-unique-validator');

// const UserSchema = new Schema({
//     firstName: {
//         type: String,
//         required: [true, 'Please provide First name'],
//     },
//     lastName: {
//         type: String,
//         required: [true, 'Please provide Last name'],
//     },
//     password: {
//         type: password,
//         required: [true, 'Please provide Password']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide Email']
//     },
//     phoneNumber: {
//         type: Number,
//         required: [true, 'Please provide Phone number']
//     },
// });

// UserSchema.plugin(uniqueValidator);
// UserSchema.pre('save', function (next) {
//     const user = this
//     bcryptjs.hash(user.password, 10, (error, hash) => {
//         user.password = hash
//         next()
//     });
// });

// const User = model('User', UserSchema);
// module.exports = User


module.exports = (sequelize, type) => {
    return sequelize.define('student', {
        id: {

        }

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

const bcryptjs = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide First name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please provide Last name'],
    },
    password: {
        type: password,
        required: [true, 'Please provide Password']
    },
    email: {
        type: String,
        required: [true, 'Please provide Email']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please provide Phone number']
    },
});

UserSchema.plugin(uniqueValidator);
UserSchema.pre('save', function (next) {
    const user = this
    bcryptjs.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    });
});

const User = model('User', UserSchema);
module.exports = User


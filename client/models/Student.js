const bcryptjs = require('bcryptjs')
const sequelize = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('Student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'firstName'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'lastName'
        },
        password: {
            type: Sequelize.STRING,
            field: 'password'
        },
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        phoneNumber: {
            type: Sequelize.STRING,
            field: 'phoneNumber'
        }
    });
    return Student
};



// const Student = Sequelize.define('Student', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     firstName: Sequelize.STRING,
//     lastName: Sequelize.STRING,
//     password: Sequelize.STRING,
//     email: Sequelize.STRING,
//     phoneNumber: Sequelize.STRING

// })

// module.exports = Student
// Student.beforeCreate((student, options) => {

//     return bcrypt.hash(student.password, 10)
//         .then(hash => {
//             student.password = hash;
//         })
//         .catch(err => {
//             throw new Error();
//         });
// });

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


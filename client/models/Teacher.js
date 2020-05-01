const bcryptjs = require('bcryptjs')

// module.exports = (sequelize, type) => {
//     return sequelize.define('teacher', {
//         id: {
//             type: type.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         firstName: {
//             type: type.String,
//             field: 'firstname'
//         },
//         lastName: {
//             type: type.String,
//             field: 'lastname'
//         },
//         password: type.String,
//         email: type.String,
//         phoneNumber: type.String
//     })
// };

module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define('Teacher', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        }
    });
    return Teacher
};

// Teacher.beforeCreate((teacher, options) => {

//     return bcrypt.hash(teacher.password, 10)
//         .then(hash => {
//             teacher.password = hash;
//         })
//         .catch(err => {
//             throw new Error();
//         });
// });

// const uniqueValidator = require('mongoose-unique-validator');

// const UserSchema = new Schema({
//     firstName: {
//         type: String,
//         required: [true, 'Please provide firstname'],
//     },
//     lastName: {
//         type: String,
//         required: [true, 'Please provide lastname'],
//     },
//     password: {
//         type: password,
//         required: [true, 'Please provide password']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please provide email']
//     },
//     phoneNumber: {
//         type: Number,
//         required: [true, 'Please provide phone number']
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


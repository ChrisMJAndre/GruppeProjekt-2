const bcryptjs = require('bcryptjs')


module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: DataTypes.STRING
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


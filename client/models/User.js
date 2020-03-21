//Det her er et mongoose eksempel fra bogen, vi skal nok gøre det anderledes

const { Schema, model } = require('mongoose')

const bcryptjs = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    }
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


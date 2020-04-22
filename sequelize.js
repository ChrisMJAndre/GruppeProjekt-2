const Sequelize = require('sequelize')
const StudentModel = require('./client/models/Student')
const TeacherModel = require('./client/models/Teacher')

const sequelize = new Sequelize('codementor', 'root', 'root', {
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!')
    })


const Student = StudentModel(sequelize, Sequelize)
const Teacher = TeacherModel(sequelize, Sequelize)
module.exports = {
    Student,
    Teacher
}
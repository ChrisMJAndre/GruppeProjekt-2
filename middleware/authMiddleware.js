const Student = require('../client/models/Student')
const Teacher = require('../client/models/Teacher')

module.exports = (req, res, next) => {
    Student.findById(req.session.studentId, (error, student) => {
        if (error || !student)
            return res.redirect('/')

        next()
    }),
        Teacher.findById(req.session.studentId, (error, teacher) => {
            if (error || !teacher)
                return res.redirect('/')

            next()
        })
}
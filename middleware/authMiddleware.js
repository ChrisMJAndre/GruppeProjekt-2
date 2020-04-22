const Student = require('../client/models/Student')

module.exports = (req, res, next) => {
    Student.findById(req.session.studentId, (error, student) => {
        if (error || !student)
            return res.redirect('/')

        next()
    })
}
//Også fra bogen. Redirecter, hvis man er logget ind.

module.exports = (req, res, next) => {
    if (req.session.studentId || req.session.teacherId) {
        return res.redirect('/')
    }
    next()
}
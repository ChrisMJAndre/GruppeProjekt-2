//Også fra bogen. Redirecter, hvis man er logget ind.

module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/')
    }
    next()
}
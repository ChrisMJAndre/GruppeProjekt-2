module.exports = {
    async index(req, res) {
        res.render('login')
    },

    async destroy(req, res) {
        req.session = null
        res.redirect('/')
    }
}

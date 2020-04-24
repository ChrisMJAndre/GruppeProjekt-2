const pool = require('../server/db');

module.exports = PERMISSIONARR => (req, res, next) => {


    if (!req.session.user) {
        return res.redirect('/')
    }

    const { id, userType } = req.session.user;
    let canEnter = false
    PERMISSIONARR.forEach(permission => {
        if (permission == userType) canEnter = true;
    })

    if (!canEnter) {
        return res.send("You don't have permission.");
    } else {
        pool.query(`SELECT * FROM ${userType} WHERE id=${id}`).then(result => {
            req.user = result.rows[0];
            next();
        }).catch(() => {
            return res.send('Something went wrong');
        })
    }
}
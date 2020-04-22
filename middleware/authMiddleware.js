const pool = require('../server/db');

module.exports = (PERMISSION) => async (req, res, next) => {


    const { id, userType } = req.session.user;


    if (userType !== 'teacher' || userType !== PERMISSION) {
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
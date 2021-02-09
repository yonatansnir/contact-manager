const router = require('express').Router();
const connection = require('../../config/database');

router.get('/', (req, res) => {
    let sqlQuery = `select * from contactslog order by modifiedTime DESC`;
    connection.query(sqlQuery, (err, result) => {
        if (err) res.json(err);
        res.json(result);
    })
});

module.exports = router;
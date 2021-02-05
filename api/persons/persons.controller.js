const connection = require('../../config/database');

exports.getAllPersons = (req, res) => {
    connection.query('select * from persons', (err, result) => {
        if (err) return res.json({ message: "something worng" });
        res.json(result);
    })

}

exports.postNewPerson = (req, res) => {
    req.body.modifiedTime = new Date().toISOString();
    let sqlQuery = `insert into persons set ?`;
    connection.query(sqlQuery, req.body, (err, result) => {
        if (err) return res.json(err);
        res.json(result)
    })
}

exports.getPersonById = (req, res) => {
    let { id } = req.params;
    let sqlQuery = `select * from persons where personId=${id}`
    connection.query(sqlQuery, (err, result) => {
        if (err) return res.json({ message: "something worng" });
        res.json(result[0]);
    })
}

exports.updatePerson = (req, res) => {
    let { id } = req.params;
    let { firstName } = req.body;
    let modifiedTime = new Date().toISOString();
    let sqlQuery = `update persons set firstName='${firstName}' where personId=${id}`
    connection.query(sqlQuery, (err, results) => {
        if (err) return res.json(err)
        res.json(results);
    })
}

const connection = require('../../config/database');

exports.getAllContacts = (req, res) => {
    connection.query('select * from contacts', (err, result) => {
        if (err) return res.json({ message: "something worng" });
        res.json(result);
    })

}

exports.postNewContact = (req, res) => {
    req.body.modifiedTime = new Date().toISOString();
    console.log(req.body);
    let sqlQuery = `insert into contacts set ?`;
    connection.query(sqlQuery, req.body, (err, result) => {
        if (err) return res.json(err);
        res.json(result)
    })
}

exports.getContactById = (req, res) => {
    let { id } = req.params;
    let sqlQuery = `select * from contacts where personId=${id}`
    connection.query(sqlQuery, (err, result) => {
        if (err) return res.json({ message: "something worng" });
        res.json(result[0]);
    })
}

exports.updateContact = (req, res) => {
    let { id } = req.params;
    let { firstName, lastName, phone, email, state, city, street, postalcode } = req.body;
    let modifiedTime = new Date().toISOString();
    let sqlQuery = `update contacts set 
        firstName='${firstName}', lastName='${lastName}', 
        phone='${phone}', email='${email}', 
        state='${state}', city='${city}', street='${street}', postalcode='${postalcode}'
        where personId=${id}`
    connection.query(sqlQuery, (err, results) => {
        if (err) return res.json(err)
        res.json(results);
    })
}

exports.deleteContact = (req, res) => {
    let { id } = req.params;
    let sqlQuery = `delete from contacts where personId=${id}`;
    connection.query(sqlQuery, (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    })
}
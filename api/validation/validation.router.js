const router = require('express').Router();
const axios = require('axios');

router.get('/address', (req, res) => {
    let { address } = req.query;

    axios.default.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.API_KEY}&address=${address}`)
        .then(data => {
            res.json(data.data);
        })

})


module.exports = router;
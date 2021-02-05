const router = require('express').Router();

const { getAllPersons, getPersonById, updatePerson, postNewPerson } = require('./persons.controller');

router.get('/', getAllPersons);

router.post('/', postNewPerson);

router.get('/:id', getPersonById);

router.put('/:id', updatePerson);

module.exports = router;
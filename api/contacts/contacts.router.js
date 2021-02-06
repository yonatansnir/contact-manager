const router = require('express').Router();

const { getAllContacts, postNewContact, getContactById, updateContact, deleteContact } = require('./contacts.controller');

router.get('/', getAllContacts);

router.post('/', postNewContact);

router.get('/:id', getContactById);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;
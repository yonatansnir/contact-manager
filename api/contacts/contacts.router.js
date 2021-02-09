const router = require('express').Router();

const {
    getAllContacts,
    postNewContact,
    getContactById,
    updateContact,
    deleteContact,
    getContactModifiedInfo,
} = require('./contacts.controller');

router.get('/', getAllContacts);

router.post('/', postNewContact);

router.get('/:id', getContactById);

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

router.get('/modified/:id', getContactModifiedInfo);


module.exports = router;
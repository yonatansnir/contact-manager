import { address } from '../../utils/common';

/**
 * Get all the contacts from the server
 * and insert it to React Context API.
 * @param {Function} dispatch
 */
export function getContacts(dispatch) {
    fetch(address)
        .then(resp => resp.json())
        .then(data => dispatch({ type: "GET_ALL_CONTACTS", payload: data }));
}

/**
 * @typedef {Object} Contact
 * @property {string} firstName,
 * @property {string} lastName,
 * @property {string} phone,
 * @property {string} email,
 * @property {string} state,
 * @property {string} city,
 * @property {string} street,
 * @property {string} postalcode,
 * 
 * Create a new contact
 * @param {Contact} contact The form state of the user
 * @param {Function} dispatch The Callback that insert the contact to Context API.
 */
export function postNewContact(contact, dispatch) {
    fetch(address, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_CONTACT', payload: { ...contact, personId: data.insertId } })
        });
}
import { address } from '../../utils/common';

/**
 * @type {number} The secound to close the update message
 */
const SECOUNDS_IN_MS = 5000;

/**
 * Get all the contacts from the server
 * and insert it to React Context API.
 * @param {Function} dispatch
 */
export function getContacts(dispatch) {
    fetch(address)
        .then(resp => resp.json())
        .then(data => dispatch({ type: "GET_ALL_CONTACTS", payload: data }))
        .catch(err => dispatch({ type: "FAILED" }));
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
 * @param {Function} setMessage Update the UI with a message.
 */
export function postNewContact(contact, dispatch, setMessage) {
    fetch(address, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'ADD_CONTACT', payload: { ...contact, contactId: data.insertId } });
            setMessage(true);
            setTimeout(() => {
                setMessage(false)
            }, SECOUNDS_IN_MS)
        })
}

/**
 * Change spesific contact.
 * @param {number} contactId The ID of the contact.
 * @param {Contact} contact The contact object. 
 * @param {Function} dispatch Dispatch function to insert to Context.
 * @param {Function} setMessage Set a message to the user in the UI.
 */
export function changeContact(contactId, contact, dispatch, setMessage) {
    fetch(`${address}/${contactId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'UPDATE_CONTACT', payload: contact });
            setMessage(true);
            setTimeout(() => {
                setMessage(false)
            }, SECOUNDS_IN_MS)
        });
}

/**
 * delete contact from server and client.
 * @param {number} contactId The ID of the contact
 * @param {Function} dispatch Update Context API.
 */
export function deleteContact(contactId, dispatch) {
    fetch(`${address}/${contactId}`, {
        method: "DELETE"
    })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: 'DELETE_CONTACT', payload: parseInt(contactId) });
            console.log(data)
        })
}

/**
 * 
 * @param {number} contactId The contact ID
 * @param {Function} setModified Callback. set the times in the UI
 */
export function getContactModifiedInfo(contactId, setModified) {
    fetch(`${address}/modified/${contactId}`)
        .then(resp => resp.json())
        .then(data => {
            setModified(data[0]);
        });
}
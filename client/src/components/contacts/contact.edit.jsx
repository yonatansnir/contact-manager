import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ContactsContext } from "../../context/contacts.provider";
import { dateToString } from "../../utils/common";
import Alert from "../alert/alert";
import Button from "../form-element/Button";
import Input from "../form-element/Input";
import Loader from "../loader/loader";
import Address from './contact.address';
import { changeContact, deleteContact, getContactModifiedInfo } from "./contact.api";

const EditContact = ({ contactId }) => {
    const history = useHistory();
    
    let [contacts, dispatch] = useContext(ContactsContext);
    let [message, setMessage] = useState(false);
    let [modified, setModified] = useState(null);
    let [deletePopup, setDeletePopup] = useState(false);

    let { contactsData, failed } = contacts;
    
    const [form, setForm] = useState(null);

    useEffect(() => {
        let contact = contactsData?.find(p => p.contactId === parseInt(contactId));
        if (contactsData && !contact) return setForm('NOT_FOUND');
        setForm(contact);
        getContactModifiedInfo(contactId, setModified);
    }, [contactsData, contactId])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }

    const handleDelete = () => {
        deleteContact(contactId, dispatch);
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeContact(contactId, form, dispatch, setMessage);
    }

    if (form === 'NOT_FOUND') return <h2>Contact Not Found</h2>

    return(
        form ? 
                <form onSubmit={handleSubmit}>
                    <div className="edit-header">
                        <div>
                            <h2>{form.firstName} {form.lastName}</h2>
                            {modified ? 
                            <h3>Edited {modified.numberOfEdits} times.<br />
                            {modified.modifiedTime ? 'Last modified ' + dateToString(modified.modifiedTime) : ''}</h3>
                            : 'Loading...'
                            }
                        </div>
                        <div>
                            <p>Created
                            {" " + dateToString(modified?.createdTime)}</p>
                        </div>
                    </div>
                    <Input title="First Name" type="text" name="firstName" 
                        value={form.firstName} 
                        handleChange={handleChange}
                    />
                    <Input title="Last Name" type="text" name="lastName" 
                        value={form.lastName} 
                        handleChange={handleChange}
                    />
                    <Input title="Phone" type="text" name="phone" 
                        value={form.phone} 
                        handleChange={handleChange}
                    />
                    <Input title="Email" type="text" name="email" 
                        value={form.email} 
                        handleChange={handleChange}
                    />
                    <Address form={form} setForm={setForm} />
                    <div>
                        <Button>Update</Button>
                        <button type="button" onClick={() => setDeletePopup(true)} className="btn-red" style={{ width: '150px' }}>Delete Contact</button>
                        {deletePopup ? 
                        <Alert message='Are You Sure?' handler={handleDelete} cancel={() => setDeletePopup(false)} />
                        : '' }
                    </div>
                    {message ? <div className="success-msg">Updated!</div> : ''}
                    
                </form>
            : <Loader />
    )

}

export default EditContact;
import { useContext, useState } from "react"
import { ContactsContext } from "../../context/contacts.provider";
import Button from "../form-element/Button";
import Input from "../form-element/Input";
import ContactIcon from "../icons/contact.icon";
import { postNewContact } from "./contact.api";

const formInputs = [
    { id: 1, title: 'First Name', type: 'text', name: 'firstName' },
    { id: 2, title: 'Last Name', type: 'text', name: 'lastName' },
    { id: 3, title: 'Phone', type: 'text', name: 'phone' },
    { id: 4, title: 'Email', type: 'text', name: 'email' },
    { id: 5, title: 'State', type: 'text', name: 'state' },
    { id: 6, title: 'City', type: 'text', name: 'city' },
    { id: 7, title: 'Street', type: 'text', name: 'street' },
    { id: 8, title: 'Postal Code', type: 'tel', name: 'postalcode' },
]

const AddContact = ({ toggle }) => {
    const [persons, dispatch] = useContext(ContactsContext);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        state: '',
        city: '',
        street: '',
        postalcode: ''
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewContact(form, dispatch);
    }

    return (
        <div className={toggle ? "add-person show" : "add-person"}>
            <h2><ContactIcon />Add New Person</h2>
            <form onSubmit={handleSubmit}>
                {formInputs.map(input => <Input key={input.id} {...input} value={form[input.name]} handleChange={handleChange} />)}
                <Button>Send</Button>
            </form>
        </div>
    )
}

export default AddContact;
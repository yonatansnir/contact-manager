import { useContext, useState } from "react"
import { ContactsContext } from "../../context/contacts.provider";
import Button from "../form-element/Button";
import Input from "../form-element/Input";
import ContactIcon from "../icons/contact.icon";
import Address from "./contact.address";
import { postNewContact } from "./contact.api";

const formInputs = [
    { id: 1, title: 'First Name', type: 'text', name: 'firstName' },
    { id: 2, title: 'Last Name', type: 'text', name: 'lastName' },
    { id: 3, title: 'Phone', type: 'text', name: 'phone' },
    { id: 4, title: 'Email', type: 'text', name: 'email' }
]

const AddContact = ({ toggle }) => {
    const [persons, dispatch] = useContext(ContactsContext);
    let [message, setMessage] = useState(false);

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
        postNewContact(form, dispatch, setMessage);
        setTimeout(() => {
            console.log('Checking for memory leak')
            setMessage(false)
        },7000)
    }

    return (
        <div className={toggle ? "add-person show" : "add-person"}>
            <h2><ContactIcon />Add New Person</h2>
            <form onSubmit={handleSubmit}>
                {formInputs.map(input => <Input key={input.id} {...input} value={form[input.name]} handleChange={handleChange} />)}
                <Address form={form} setForm={setForm} />
                <Button>Send</Button>
            </form>
            {message ? <div className="success-msg">Updated!</div> : ''}
        </div>
    )
}

export default AddContact;
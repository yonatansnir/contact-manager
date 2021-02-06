import { useContext, useEffect, useState } from "react";
import { ContactsContext } from "../../context/contacts.provider";
import Button from "../form-element/Button";
import Input from "../form-element/Input";
import Loader from "../loader/loader";

const EditContact = ({ contactId, setContactId }) => {
    const [contacts, dispatch] = useContext(ContactsContext);
    const [form, setForm] = useState({});

    useEffect(() => {
        if (!contactId) return;
        let findContact = contacts.find(c => c.personId === contactId);
        setForm(findContact);
    }, [contactId])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5050/api/contacts/${contactId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        .then(resp => resp.json())
        .then(data => console.log(data));
    }

    return(
        <div className="contact-box">
            {contactId ? 
                <form onSubmit={handleSubmit}>
                    <h1>Edit Contact</h1>
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
                    <Input title="Email" type="text" name="Email" 
                        value={form.email} 
                        handleChange={handleChange}
                    />
                    <Input title="State" type="text" name="state" 
                        value={form.state} 
                        handleChange={handleChange}
                    />
                    <Input title="City" type="text" name="city" 
                        value={form.city} 
                        handleChange={handleChange}
                    />
                    <Input title="street" type="text" name="street" 
                        value={form.street} 
                        handleChange={handleChange}
                    />
                    <Input title="Postal Code" type="text" name="postalcode" 
                        value={form.postalcode} 
                        handleChange={handleChange}
                    />
                    <Button>Update</Button>
                    <button type="rest" className="btn-close" onClick={() => setContactId('')}>Close</button>
                </form>
            : <Loader />
            }
        </div>
    )

}

export default EditContact;
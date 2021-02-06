import { useState } from "react";
import ContactIcon from "../icons/contact.icon";
import EditIcon from '../icons/edit.icon';
import ContactInfo from "./contact.info";

const ContactItem = ({ person }) => {
    let [show, setShow] = useState(false);
    return(
        <>
        <div className="person-item" onClick={() => setShow(true)}>
            <ContactIcon />
            <h3>{person.firstName} {person.lastName}</h3>
            <h3>{person.email}</h3>
            <h3>{person.city}</h3>
            <EditIcon />
        </div>
        {show ? <ContactInfo person={person} setShow={setShow} />
        : '' }
        </>
    )
}

export default ContactItem;
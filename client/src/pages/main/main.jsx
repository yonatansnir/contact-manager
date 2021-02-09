import { useState } from 'react';
import AddContact from '../../components/contacts/contact.add';
import ContactList from '../../components/contacts/contacts.list';

const Main = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <div className="main">
            <div>
                <button className="btn-add" onClick={() => setToggle(!toggle)}>
                {toggle ? 'Close' : 'Add New User'}
                </button>
                <AddContact toggle={toggle} />
            </div>
            <ContactList />
        </div>
    )
}

export default Main;
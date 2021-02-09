import { useContext, useEffect, useState } from "react"
import { ContactsContext } from "../../context/contacts.provider";
import SearchIcon from "../icons/search.icon";
import Loader from "../loader/loader";
import ContactItem from "./contact.item";

const ContactList = () => {
    const [contacts, dispatch] = useContext(ContactsContext);
    let { contactsData, failed } = contacts;
    let [search, setSearch] = useState('');

    const personsFilter = contactsData?.filter((p) => searchFilter(p, search));
    
    if (failed) return <h3 style={{color: 'red', textAlign: 'center'}} >ERROR GET CONTACTS</h3>

    return (
        <div className="persons-list">
            <div className="person-search">
                <input type="text" placeholder="Type For Search" onChange={e => setSearch(e.target.value.toLocaleLowerCase())} />
                <div>
                    <h4>{personsFilter?.length}</h4>
                    <SearchIcon />
                </div>
            </div>
            {!contactsData ? <Loader /> :
                personsFilter.map(person => <ContactItem key={person.contactId} person={person} />)
            }
        </div>
    )
}

function searchFilter(p, search){
    return (
        p.firstName.toLowerCase().includes(search) ||
        p.lastName.toLowerCase().includes(search) ||
        p.city.toLowerCase().includes(search)
    )
}

export default ContactList;
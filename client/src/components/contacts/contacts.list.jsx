import { useContext, useEffect, useState } from "react"
import { ContactsContext } from "../../context/contacts.provider";
import SearchIcon from "../icons/search.icon";
import Loader from "../loader/loader";
import { getContacts } from "./contact.api";
import ContactItem from "./contact.item";

const ContactList = () => {
    const [contacts, dispatch] = useContext(ContactsContext);
    let [search, setSearch] = useState('');

    const personsFilter = contacts?.filter((p) => searchFilter(p, search));

    useEffect(() => {
        getContacts(dispatch);
    }, [])

    return (
        <div className="persons-list">
            <div className="person-search">
                <input type="text" placeholder="Type For Search" onChange={e => setSearch(e.target.value.toLocaleLowerCase())} />
                <div>
                    <h4>{personsFilter?.length}</h4>
                    <SearchIcon />
                </div>
            </div>
            {!contacts ? <Loader /> :
                personsFilter.map(person => <ContactItem key={person.personId} person={person} />)
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
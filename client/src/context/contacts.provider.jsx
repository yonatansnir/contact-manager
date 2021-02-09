import { createContext, useEffect, useReducer } from 'react';
import { getContacts } from '../components/contacts/contact.api';
import { contactsReducer, INITIAL_STATE } from './reducers/contactsReducer';

export const ContactsContext = createContext();

const PersonProvider = ({ children }) => {
    const [contacts, dispatch] = useReducer(contactsReducer, INITIAL_STATE);

    useEffect(() => {
        getContacts(dispatch);
    }, [])
    
    return(
        <ContactsContext.Provider value={[contacts, dispatch]}>
            {children}
        </ContactsContext.Provider>
    )
}

export default PersonProvider;
import { createContext, useReducer } from 'react';
import { contactsReducer } from './reducers/contactsReducer';

export const ContactsContext = createContext();

const PersonProvider = ({ children }) => {
    const [contacts, dispatch] = useReducer(contactsReducer, null)
    
    return(
        <ContactsContext.Provider value={[contacts, dispatch]}>
            {children}
        </ContactsContext.Provider>
    )
}

export default PersonProvider;
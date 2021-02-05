import { createContext, useReducer } from 'react';
import { personsReducer } from './reducers/personsReducer';

export const PersonContext = createContext();

const PersonProvider = ({ children }) => {
    const [persons, dispatch] = useReducer(personsReducer, null)
    
    return(
        <PersonContext.Provider value={[persons, dispatch]}>
            {children}
        </PersonContext.Provider>
    )
}

export default PersonProvider;
export const INITIAL_STATE = {
    failed: false,
    contactsData: null
}

export const contactsReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GET_ALL_CONTACTS':
            return { ...state, contactsData: payload };
        case 'FAILED':
            return { contactsData: null, failed: true }
        case 'ADD_CONTACT':
            return { ...state, contactsData: [...state.contactsData, payload] };
        case 'UPDATE_CONTACT':
            let arr = [...state.contactsData];
            let index = arr.findIndex(c => c.contactId === payload.contactId);
            arr[index] = payload;
            return { ...state, contactsData: arr };
        case 'DELETE_CONTACT':
            return { ...state, contactsData: state.contactsData.filter(c => c.contactId !== payload) }
        default:
            return state;
    }
}
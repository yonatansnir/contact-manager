export const contactsReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GET_ALL_CONTACTS':
            return payload;
        case 'ADD_CONTACTS':
            return [...state, payload];
        default:
            return state;
    }
}
export const personsReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GET_ALL_PERSONS':
            return payload;
        case 'ADD_PERSON':
            return [...state, payload];
        default:
            return state;
    }
}
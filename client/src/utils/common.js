// const address = req

export const address = 'http://localhost:5050/api/contacts';
export const addressLog = 'http://localhost:5050/api/log';

/**
 * Convert Date into a string.
 * @param {string} dateStr The date String
 */
export function dateToString(dateStr) {
    let date = new Date(dateStr);
    let year = date.getFullYear();
    let month = fixNumber(date.getMonth() + 1);
    let day = fixNumber(date.getDate());

    let hours = fixNumber(date.getHours());
    let minutes = fixNumber(date.getMinutes());
    let secounds = fixNumber(date.getSeconds());

    return `${day}/${month}/${year} at ${hours}:${minutes}:${secounds}`;
}

/**
 * Turn single digit number into two digits.
 * @param {number} number The number to convert.
 */
function fixNumber(number) {
    return number < 10 ? "0" + number : number;
}
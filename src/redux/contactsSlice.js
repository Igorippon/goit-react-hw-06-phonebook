import { nanoid } from "nanoid";

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contact/addContact":
            return [action.payload, ...state];
        case 'contact/deleteContact':
            return state.filter(contact => contact.id !== action.payload);
        default:
            return state;
    };
};

export const addContact = (value) => {
    return {
        type: "contact/addContact",
        payload: { id: nanoid(), ...value },
    };
};

export const deleteContact = (contactId) => {
    return {
        type: 'contact/deleteContact',
        payload: contactId,
    };
};


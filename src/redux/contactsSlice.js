import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contacts',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    reducers: {
        addContact: {
            reducer(state, action) { state.push(action.payload); },
            prepare(value) {
                return {
                    payload: {
                        id: nanoid(),
                        ...value,

                    },
                };
            },
        },
        deleteContact(state, action) { return state.filter(contact => contact.id !== action.payload); }
    },
});

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;

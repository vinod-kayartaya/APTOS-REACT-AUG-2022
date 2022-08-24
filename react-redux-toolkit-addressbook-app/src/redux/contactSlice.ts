import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        contacts: [
            { id: 1, firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore', email: 'vinod@vinod.co' },
            { id: 2, firstname: 'Krishna', lastname: 'Kamat', city: 'Bangalore', email: 'krishna.kamat@xmpl.com' },
            { id: 3, firstname: 'Pranav', lastname: 'Kumar', city: 'Vasco', email: 'pranav.kumar@xmpl.com' },
        ]
    },
    reducers: {
        addContact: (state: any, action: any) => {
            // action.payload is assumed to be the new contact to add to the existing state
            const id = state.contacts.length > 0
                ? 1 + Math.max(...state.contacts.map((c: any) => c.id))
                : 1;
            state.contacts.push({ ...action.payload, id }); // directly mutate the state
        },
        deleteContact: (state, action) => {
            // action.payload is assumed to be the 'id' of the contact to be deleted
            const index = state.contacts.findIndex((c: any) => c.id === action.payload);
            if (index !== -1) {
                state.contacts.splice(index, 1);
            }
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions // represent all action creators
export default contactSlice.reducer;
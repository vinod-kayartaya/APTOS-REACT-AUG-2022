import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        contacts: [
            { id: 1, firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore', email: 'vinod@vinod.co' },
            { id: 2, firstname: 'Krishna', lastname: 'Kamat', city: 'Bangalore', email: 'krishna.kamat@xmpl.com' },
            { id: 3, firstname: 'Pranav', lastname: 'Kumar', city: 'Vasco', email: 'pranav.kumar@xmpl.com' },
        ],
        selectedContact: {},
        isEditing: false,
    },
    reducers: {
        addContact: (state: any, action: any) => {
            // action.payload is assumed to be the new contact to add to the existing state

            fetch('http://localhost:8080/customers/')
                .then(resp => resp.json())
                .then(() => {
                    const id = state.contacts.length > 0
                        ? 1 + Math.max(...state.contacts.map((c: any) => c.id))
                        : 1;
                    state.contacts.push({ ...action.payload, id }); // directly mutate the state
                })

        },
        deleteContact: (state, action) => {
            // action.payload is assumed to be the 'id' of the contact to be deleted
            const index = state.contacts.findIndex((c: any) => c.id === action.payload);
            if (index !== -1) {
                state.contacts.splice(index, 1);
            }
        },
        selectContact: (state, action) => {
            // action.payload is assumed to be the 'id' of the contact to be selected
            let contact = state.contacts.find((c: any) => c.id === action.payload);
            if (contact) {
                state.selectedContact = { ...contact };
            }
        },
        setIsEditing: (state, action) => {
            // action.payload is assumed to be boolean
            console.log('inside isEditing() action is', action)
            state.isEditing = action.payload
        },
        updateContact: (state, action) => {
            const contact = action.payload
            const index = state.contacts.findIndex((c: any) => c.id === contact.id);
            if (index !== -1) {
                state.contacts[index] = contact;
                state.isEditing = false;
                state.selectedContact = {}
            }
        }
    }
});

export const { addContact, deleteContact, selectContact, setIsEditing, updateContact } = contactSlice.actions // represent all action creators
export default contactSlice.reducer;
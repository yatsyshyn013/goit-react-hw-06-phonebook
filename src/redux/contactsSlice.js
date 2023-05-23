
import { nanoid } from 'nanoid';
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const contactsBookSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsBookSlice.actions;
export const contactsReducer = contactsBookSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { mainState } from "./data";

const contactsSlice = createSlice({
   name: "contacts",
   initialState: mainState.contacts,
   reducers: {
      addContact(state, action) {
         state.items = [...state.items, action.payload];
      },
      deleteContact(state, action) {
         state.items = state.items.filter((item) => item.id !== action.payload);
      },
   },
});

// генератори екшенів - функции 
export const { addContact, deleteContact } = contactsSlice.actions;

// редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// селектор
export const selectContacts = (state) => state.contacts.items;

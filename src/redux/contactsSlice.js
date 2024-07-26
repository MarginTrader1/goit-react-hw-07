import { createSlice } from "@reduxjs/toolkit";
import { mainState } from "./data";
import { fetchContacts } from "./contactsOps";

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
   extraReducers: (builder) => {
      builder
         .addCase(fetchContacts.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

// генератори екшенів - функции
export const { addContact, deleteContact } = contactsSlice.actions;

// редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// селектор
export const selectContacts = (state) => state.contacts.items;

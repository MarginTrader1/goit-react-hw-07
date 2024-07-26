import { createSelector, createSlice } from "@reduxjs/toolkit";

import { selectNameFilter } from "./filtersSlice";

import { mainState } from "./data";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
   name: "contacts",
   initialState: mainState.contacts,
   extraReducers: (builder) => {
      builder
         // блок для першого запиту
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
         })
         // блок додавання контакту
         .addCase(addContact.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = [...state.items, action.payload];
         })
         .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })

         // блок выдалення контакту
         .addCase(deleteContact.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
         })
         .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

// редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// селекторы
export const selectContacts = (state) => state.contacts.items;

// складна функция-селектор = массив зависимостей + колбэк
export const selectFilteredContacts = createSelector(
   // в зависимости передаем простые функции-селекторы
   [selectContacts, selectNameFilter],

   // в аргументы колбэка передаем результат выполнения простых селекторов
   (contacts, filter) => {
      //фильтруем контакты через фильтр
      const filteredContacts = contacts.filter((item) =>
         item.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
   }
);

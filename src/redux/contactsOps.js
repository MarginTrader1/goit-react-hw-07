import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66a26582967c89168f1fee5f.mockapi.io/";

// структура ассинхронного запроса из библиотеки
// redux-toolkit примеры для createAsyncThunk
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const response = await axios.get("/contacts");
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// додавання контакту
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
      const response = await axios.post("/contacts", contact);
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// видалення контакту
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
       const response = await axios.delete(`/contacts/${id}`);
       return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
 });

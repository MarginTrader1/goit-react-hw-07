import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66a26582967c89168f1fee5f.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const response = await axios.get("/contacts");
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "contacts",
   storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({  // стор создают редюсеры из слайсов 
   reducer: {
      contacts: persistedContactsReducer, //
      filter: filterReducer, 
   },

   // костыль для ошибки на передачу функции в экшне и в диспатче
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);

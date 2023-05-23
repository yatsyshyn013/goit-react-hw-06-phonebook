import { combineReducers } from "redux";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    // version: 1,
    whitelist: ['contacts'],
    storage,
  
}


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store)
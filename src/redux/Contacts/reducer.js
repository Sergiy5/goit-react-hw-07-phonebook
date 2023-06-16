import { combineReducers } from "@reduxjs/toolkit";
import { contactsfilterSlice } from './contactsFilterSlice';
import { phoneBookReducer } from "./contactsSlice"; 

export const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: contactsfilterSlice,
});

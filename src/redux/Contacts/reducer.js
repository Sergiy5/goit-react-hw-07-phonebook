import { combineReducers } from "@reduxjs/toolkit";
import {
  contactsfilterReduser,
  // contactsReducer
} from "./contactsReducer";
import { phoneBookReducer } from "./contactsSlice"; 

export const rootReducer = combineReducers({
  contacts: phoneBookReducer,
  filter: contactsfilterReduser,
});

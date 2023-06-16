import { createSlice } from "@reduxjs/toolkit";

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, { payload }) => payload
  },
});

export const contactsfilterSlice = contactsFilterSlice.reducer; 
export const { filterContact } = contactsFilterSlice.actions;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';
import { initialState } from './initialState';

const handlePending = (state) => {
  state.isLoading = true;
};

 const REJECTED = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
};
 
const addContactFULFILLED = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const fetchContactsFULFILLED = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const deleteContactFULFILLED = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(fetchContacts.pending, PENDING)
      .addCase(fetchContacts.fulfilled, fetchContactsFULFILLED)
      .addCase(fetchContacts.rejected, REJECTED)
      // .addCase(addContact.pending, PENDING)
      .addCase(addContact.fulfilled, addContactFULFILLED)
      .addCase(addContact.rejected, REJECTED)
      // .addCase(deleteContact.pending, PENDING)
      .addCase(deleteContact.fulfilled, deleteContactFULFILLED)
      .addCase(deleteContact.rejected, REJECTED)
      .addMatcher(
        isAnyOf([
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
        ]),
        handlePending
      );
   },
})

export const phoneBookReducer = contactsSlice.reducer;


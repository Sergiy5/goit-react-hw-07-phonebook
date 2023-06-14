import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648844880e2469c038fd5f51.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log("first")
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {contact});
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/contacts');
//     // Обробка даних
//      dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     console.log("error")
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

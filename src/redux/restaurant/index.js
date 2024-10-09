import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils';

const initialState = {
  restaurants: [],
  restaurant: {},
  restaurantId: '',
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,

  reducers: {
    setLocalRestaurantId: (state, action) => {
      state.restaurantId = action.payload;
      localStorage.setItem('restaurantId', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.restaurant = action.payload;
      })
      .addCase(editRestaurant.fulfilled, (state, action) => {
        state.restaurant = action.payload;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.restaurant = {};
      });
  },
});

export const fetchRestaurantById = createAsyncThunk('restaurant/fetchByIdStatus', async (restaurantId) => {
  const id = restaurantId || localStorage.getItem('restaurantId');
  const restaurant = (await axios.get(`${API_URL}restaurants/${id}`)).data;
  return restaurant;
});

export const editRestaurant = createAsyncThunk('restaurant/edit', async (restaurant) => {
  const resRestaurant = (await axios.put(`${API_URL}restaurants/${restaurant.id}`, restaurant)).data;

  return resRestaurant;
});

export const deleteRestaurant = createAsyncThunk('restaurant/delete', async (restaurantId) => {
  axios.delete(`${API_URL}restaurants/${restaurantId}`);
});

export default restaurantSlice.reducer;

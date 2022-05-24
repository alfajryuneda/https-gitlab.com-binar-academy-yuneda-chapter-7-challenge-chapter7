import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CARS_URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const initialState = {
  cars: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get(CARS_URL);
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedCars = action.payload;
        state.cars = state.cars.concat(loadedCars);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.status;
export const getCarsError = (state) => state.cars.error;

export default carsSlice.reducer;

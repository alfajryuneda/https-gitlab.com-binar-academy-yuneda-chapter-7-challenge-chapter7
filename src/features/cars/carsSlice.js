import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CARS_URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const initialState = {
  cars: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const filteredCar = (data) => {
  data.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return {
      ...car,
      availableAt,
    };
  });
};

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  let response = await axios.get(CARS_URL);
  // let hasilfilter = response.data;
  // hasilfilter = hasilfilter.map((car) => {
  //   const isPositive = getRandomInt(0, 1) === 1;
  //   const timeAt = new Date();
  //   const mutator = getRandomInt(1000000, 100000000);
  //   const availableAt = new Date(
  //     timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
  //   );
  //   return {
  //     ...car,
  //     availableAt,
  //   };
  // });
  // console.log(hasilfilter);
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
        let loadedCars = action.payload;
        // loadedCars = loadedCars.map((car) => {
        //   const availableAt = new Date(
        //     new Date(2012, 0, 1).getTime() +
        //       Math.random() *
        //         (new Date().getTime() - new Date(2012, 0, 1).getTime())
        //   );
        //   return {
        //     ...car,
        //     availableAt,
        //   };
        // });
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

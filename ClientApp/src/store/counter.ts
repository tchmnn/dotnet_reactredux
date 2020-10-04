import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'

export type CounterState = {
  value: number;
};

export type CounterReducers<T> = {
  increment: (state: T) => void;
  decrement: (state: T) => void;
  reset: (state: T) => void;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice<CounterState, CounterReducers<CounterState>, "counter">({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.value += 1;
    },
    decrement (state) {
      state.value -= 1;
    },
    reset (state) {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

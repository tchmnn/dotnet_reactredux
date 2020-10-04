import { Action, combineReducers, ThunkAction } from '@reduxjs/toolkit';
import weatherForecastReducer, { WeatherForecastState } from 'store/weather';
import counterReducer, { CounterState } from 'store/counter';

export type RootState = {
  counter: CounterState;
  weather: WeatherForecastState;
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
  weather: weatherForecastReducer,
});

export default rootReducer;

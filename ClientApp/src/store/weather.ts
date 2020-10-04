import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getWeatherForecast, WeatherForecast } from 'api/weatherForecast'
import { AppThunk } from 'rootReducer'

export interface WeatherForecastState {
  weatherForecast: WeatherForecast
  error: string | null
}

const initialState: WeatherForecastState = {
  weatherForecast: null,
  error: null
}

const repoDetails = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    getWeatherForecastSuccess(state, action: PayloadAction<WeatherForecast>) {
      state.weatherForecast = action.payload;
      state.error = null
    },
    getWeatherForecastFailure(state, action: PayloadAction<string>) {
      state.weatherForecast = null
      state.error = action.payload
    }
  }
})

export const {
  getWeatherForecastSuccess,
  getWeatherForecastFailure
} = repoDetails.actions

export default repoDetails.reducer


export const fetchWeatherForecast = (): AppThunk => async dispatch => {
  try {
    const weatherForecast = await getWeatherForecast()
    dispatch(getWeatherForecastSuccess(weatherForecast))
  } catch (err) {
    dispatch(getWeatherForecastFailure(err.toString()))
  }
}

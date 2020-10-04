import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { WeatherForecast } from 'api/weatherForecast';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import { fetchWeatherForecast } from 'store/weather';

function FetchData () {
  const weatherForecast = useSelector((state: RootState) => state.weather.weatherForecast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherForecast());
  }, [])

  if (!weatherForecast) {
    return null;
  }

  return (
    <Table aria-labelledby="tabelLabel">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Temp. (C)</TableCell>
          <TableCell>Temp. (F)</TableCell>
          <TableCell>Summary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {weatherForecast.map((forecast: WeatherForecast) =>
          <TableRow key={forecast.date}>
            <TableCell>{forecast.date}</TableCell>
            <TableCell>{forecast.temperatureC}</TableCell>
            <TableCell>{forecast.temperatureF}</TableCell>
            <TableCell>{forecast.summary}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default FetchData;

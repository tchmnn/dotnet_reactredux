
export type WeatherForecast = any;

export async function getWeatherForecast (): Promise<WeatherForecast> {
  const response = await fetch('/weatherforecast');
  const json = await response.json();
  return json;
}

export interface WeatherCondition {
  icon: string;
}

export interface Day {
  mintemp_c: number;
  maxtemp_c: number;
  condition: WeatherCondition;
}

export interface ForecastDay {
  date: string;
  day: Day;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface Location {
  localtime: string;
}

export interface WeatherData {
  forecast: Forecast;
  location: Location;
}

export interface FutureWeatherProps {
  weatherData: WeatherData;
}

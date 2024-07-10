export interface Condition {
  text: string;
  icon: string;
}

export interface Location {
  name: string;
  localtime: string;
}

export interface CurrentWeather {
  condition: Condition;
  feelslike_f: number;
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
}

export interface TodayWeatherProps {
  weatherData: WeatherData;
}

import React from "react";
import { Grid } from "@mui/material";
import { FutureWeatherProps } from "./type/futureWeather.types";
import { useTheme } from "@mui/material/styles";
import { TitleWeather, WeatherItem } from "./style/futureWeather.styles";

const FutureWeather: React.FC<FutureWeatherProps> = ({ weatherData }) => {
  const theme = useTheme();

  const data = weatherData?.forecast?.forecastday
    ?.filter((item) => {
      return item.date !== weatherData?.location?.localtime?.split(" ")?.[0];
    })
    .map((item) => {
      const date = new Date(item.date);
      const dayOfWeek = date
        .toLocaleDateString("en-US", { weekday: "short" })
        .toLowerCase();

      return {
        ...item,
        days: dayOfWeek,
      };
    });

  return (
    <>
      <Grid container spacing={2}>
        {data?.map((item, index) => (
          <WeatherItem key={index} item xs={2}>
            <p>{item.days}</p>
            <img src={item.day.condition.icon} alt="Weather Icon" />
            <TitleWeather theme={theme}>
              {item.day.mintemp_c}/{item.day.maxtemp_c}
            </TitleWeather>
          </WeatherItem>
        ))}
      </Grid>
    </>
  );
};

export default FutureWeather;

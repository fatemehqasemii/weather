import React from "react";
import { TodayWeatherProps } from "./type/todatWeather.types";
import {
  StyledDateText,
  StyledGridContainer,
  StyledGridItemLeft,
  StyledGridItemRight,
  StyledTemperature,
  StyledWeatherConditionText,
  StyledWeatherIcon,
  StyledWeatherIconContainer,
  StyledLocationName,
} from "./styled/todayWeather.styled";
import { useTheme } from "@mui/material/styles";

const TodayWeather: React.FC<TodayWeatherProps> = ({ weatherData }) => {
  const theme = useTheme();

  return (
    <StyledGridContainer container>
      <StyledGridItemLeft item xs={6}>
        <StyledLocationName variant="h3" theme={theme}>
          {weatherData?.location?.name}
        </StyledLocationName>
        <StyledDateText theme={theme}>
          {weatherData?.location?.localtime?.split(" ")?.[0]}
        </StyledDateText>
        <StyledWeatherIconContainer>
          {weatherData?.current?.condition?.icon && (
            <StyledWeatherIcon
              src={weatherData?.current?.condition.icon}
              alt="Weather Icon"
            />
          )}
          <StyledWeatherConditionText>
            {weatherData?.current?.condition?.text}
          </StyledWeatherConditionText>
        </StyledWeatherIconContainer>
      </StyledGridItemLeft>
      <StyledGridItemRight item xs={6}>
        <StyledTemperature>
          {weatherData?.current?.feelslike_f + "°"}
        </StyledTemperature>
      </StyledGridItemRight>
    </StyledGridContainer>
  );
};

export default TodayWeather;

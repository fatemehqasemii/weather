import React, { useEffect } from "react";
import { useGetCurrentWeatherQuery } from "../../services/weatherApi";
import { CardContent, Typography, CircularProgress } from "@mui/material";
import TodayWeather from "../TodayWeather";
import FutureWeather from "../FutureWeather";
import { useGetIpInfoQuery } from "../../services/ipApi";
import { useForm } from "react-hook-form";
import { FormValues } from "./type/location.types";
import {
  CardContainer,
  CenteredContainer,
  StyledBox,
} from "./style/location.styled";

const Location: React.FC = () => {
  const {
    data: ipData,
    error: ipError,
    isLoading: ipLoading,
  } = useGetIpInfoQuery({});

  const { setValue, watch } = useForm<FormValues>();
  const city = watch("city");

  useEffect(() => {
    if (ipData?.city) {
      setValue("city", ipData.city);
    }
  }, [ipData, setValue]);

  const {
    data: weatherData,
    error: weatherError,
    isLoading: weatherLoading,
  } = useGetCurrentWeatherQuery(city, { skip: !city });

  return (
    <CenteredContainer>
      <CardContainer>
        <CardContent>
          {weatherLoading || ipError || ipLoading || weatherError ? (
            <StyledBox>
              <CircularProgress />
            </StyledBox>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                <TodayWeather weatherData={weatherData} />
              </Typography>
              <hr />
              <Typography variant="body2" color="textSecondary" component="p">
                <FutureWeather weatherData={weatherData} />
              </Typography>
            </>
          )}
        </CardContent>
      </CardContainer>
    </CenteredContainer>
  );
};

export default Location;

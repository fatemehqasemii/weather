import { Grid, styled } from "@mui/material";

export const WeatherItem = styled(Grid)({
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
});

export const TitleWeather = styled("p")({
  fontSize: "10px",
});

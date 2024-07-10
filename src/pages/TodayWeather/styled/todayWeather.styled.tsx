import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

export const StyledGridContainer = styled(Grid)({
  spacing: 8,
});

export const StyledGridItemLeft = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
});

export const StyledDateText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

export const StyledWeatherIconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledWeatherIcon = styled("img")({
  width: "50px",
  height: "50px",
  marginRight: "10px",
});

export const StyledWeatherConditionText = styled(Typography)({
  fontSize: "14px",
});

export const StyledGridItemRight = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledTemperature = styled(Typography)({
  fontSize: "50px",
});

export const StyledLocationName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

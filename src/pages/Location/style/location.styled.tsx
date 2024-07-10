import { Card, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CenteredContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const CardContainer = styled(Card)(() => ({
  // maxWidth: 500,
  backgroundImage: "url('https://unsplash.it/600/400?image=1043&blur')",
  backgroundSize: "cover",
  boxShadow: "25px 25px 40px 0px rgba(0,0,0,0.33)",
  borderRadius: "20px",
  color: "#fff",
}));

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

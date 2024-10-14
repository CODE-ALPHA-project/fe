import { style } from "@vanilla-extract/css";

export const taxInfoSection = style({
  background: "rgba(38 38 38)",
  color: "white",
  padding: "40px 20px",
  // borderRadius: "10px",
  textAlign: "center",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const subtitle = style({
  fontSize: "18px",
  marginBottom: "30px",
});

export const cardContainer = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "50px",
});

export const responsiveCardContainer = style({
  "@media": {
    [`screen and (max-width: 768px)`]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

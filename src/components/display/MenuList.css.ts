import { style } from "@vanilla-extract/css";

export const taxInfoSection = style({
  background: "linear-gradient(to top, #1e293a, #3b4b66)",
  color: "white",
  padding: "40px 20px",
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

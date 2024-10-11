import { style } from "@vanilla-extract/css";

export const card = style({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  padding: "20px",
  width: "300px",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 2px 8px rgba(255,255,255,1)",
  },
});

export const icon = style({
  width: "50px",
  height: "50px",
  marginBottom: "15px",
});

export const cardTitle = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const cardDescription = style({
  fontSize: "14px",
  lineHeight: "1.4",
});

export const responsiveCard = style({
  "@media": {
    [`screen and (max-width: 768px)`]: {
      width: "100%",
      maxWidth: "300px",
    },
  },
});

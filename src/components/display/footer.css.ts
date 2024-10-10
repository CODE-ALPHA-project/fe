import { style } from "@vanilla-extract/css";

export const footer = style({
  backgroundColor: "#f7f7f7",
  color: "#444",
  padding: "30px 0",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  width: "100%",
  boxSizing: "border-box",
  margin: "0",
});

export const footerContent = style({
  position: "relative",
  zIndex: 2,
});

export const footerLink = style({
  color: "#3498db",
  textDecoration: "none",
  margin: "0 10px",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#2980b9",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      display: "block",
      margin: "10px 0",
    },
  },
});

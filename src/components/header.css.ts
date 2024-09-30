import { style } from "@vanilla-extract/css";
import { fadeIn } from "../pages/home.css";

export const header = style({
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "20px 0",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  animation: `${fadeIn} 0.5s ease-out`,
  "@media": {
    "screen and (max-width:768px)": {
      display: "flex",
    },
  },
});

export const headerContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const logo = style({
  fontSize: "2rem",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#fff",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
  },
});

export const nav = style({
  display: "flex",
  gap: "20px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "10px",
    },
  },
});

export const link = style({
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.1rem",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    transform: "translateY(-2px)",
  },
  ":active": {
    transform: "translateY(0)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      padding: "0.3rem 0.6rem",
    },
  },
});

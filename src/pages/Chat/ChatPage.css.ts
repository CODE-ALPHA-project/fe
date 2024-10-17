import { style, createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    background: "#ffffff",
    text: "#000000",
    primary: "#000000",
    secondary: "#4b5563",
    accent: "#6366f1",
    border: "#e5e7eb",
  },
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
  },
});

export const container = style({
  display: "flex",
  height: "100vh",
  position: "relative",
});


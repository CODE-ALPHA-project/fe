import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "768px";

export const searchForm = style({
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      display: "flex",
      flexGrow: 1,
      padding: "0 6em",
      maxWidth: "600px",
      minWidth: "350px",
      margin: "0 20px",
    },
  },
});

export const searchInput = style({
  flexGrow: 1,
  border: "1px solid #eee",
  borderRadius: "20px",
  padding: "5px 15px",
  fontSize: "14px",
  "::placeholder": {
    color: "#888",
  },
  ":focus": {
    outline: "none",
    borderColor: "#007bff",
    boxShadow: "0 0 0 2px rgba(0,123,255,0.25)",
  },
  ":focus-visible": {
    outline: "none",
  },
});

export const searchButton = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
});

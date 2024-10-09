import { style, globalStyle, keyframes } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  // overflowX: "hidden",
});

export const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(-20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const container = style({
  fontFamily: "'Noto Sans KR', Arial, sans-serif",
  padding: "0",
  borderTop: "none",
  margin: "0",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // overflowX: "hidden",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
    "screen and (max-width: 480px)": {
      fontSize: "14px",
    },
  },
});

export const main = style({
  flex: 1,
  // padding: "40px 20px",
  // maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      // padding: "20px 10px",
    },
  },
});

export const sectionTitle = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const expertsSection = style({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
});

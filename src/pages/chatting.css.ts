import { style } from "@vanilla-extract/css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const chatArea = style({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
});

export const inputArea = style({
  borderTop: "1px solid #e0e0e0",
});

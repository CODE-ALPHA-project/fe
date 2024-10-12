import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const inputForm = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "9999px",
  padding: "4px",
});

export const input = style({
  flex: 1,
  border: "none",
  outline: "none",
  padding: "8px 12px",
  fontSize: "14px",
  backgroundColor: "transparent",
});

export const uploadButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.secondary,
});

export const sendButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.accent,
});

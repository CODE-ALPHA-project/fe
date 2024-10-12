import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const chatArea = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100%",
  maxWidth: "auto",
  margin: "0 auto",
  position: "relative",
  backgroundColor: vars.color.background,
  overflow: "hidden",
});

export const chatContent = style({
  flex: 1,
  overflowY: "auto",
  padding: vars.space.medium,
  display: "flex",
  flexDirection: "column",
});

export const messagesContainer = style({
  flex: 1,
  overflowY: "auto",
  paddingRight: "10px",
});

export const inputWrapper = style({
  padding: vars.space.medium,
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
});

export const uploadProgress = style({
  padding: vars.space.medium,
  backgroundColor: vars.color.accent,
  color: vars.color.background,
  textAlign: "center",
  borderRadius: vars.borderRadius.medium,
  margin: vars.space.medium,
});

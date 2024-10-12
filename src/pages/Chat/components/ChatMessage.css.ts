import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const chatMessages = style({
  display: "flex",
  flexDirection: "column",
});

export const message = style({
  marginBottom: vars.space.medium,
  maxWidth: "70%",
});

export const userMessage = style([
  message,
  {
    alignSelf: "flex-end",
  },
]);

export const aiMessage = style([
  message,
  {
    alignSelf: "flex-start",
  },
]);

export const messageBubble = style({
  padding: vars.space.small,
  borderRadius: vars.borderRadius.medium,
  display: "inline-block",
  maxWidth: "100%",
  wordBreak: "break-word",
});

export const userBubble = style([
  messageBubble,
  {
    backgroundColor: vars.color.accent,
    color: vars.color.background,
  },
]);

export const aiBubble = style([
  messageBubble,
  {
    backgroundColor: "#f3f4f6",
    color: vars.color.text,
  },
]);

export const fileAttachment = style({
  marginTop: vars.space.small,
});

export const attachedImage = style({
  maxWidth: "100%",
  maxHeight: "200px",
  borderRadius: vars.borderRadius.medium,
});

export const attachedFile = style({
  display: "inline-block",
  padding: vars.space.small,
  backgroundColor: vars.color.secondary,
  color: vars.color.background,
  borderRadius: vars.borderRadius.small,
  textDecoration: "none",
});

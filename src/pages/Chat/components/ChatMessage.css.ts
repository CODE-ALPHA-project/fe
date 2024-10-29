import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const chatMessages = style({
  display: "flex",
  flexDirection: "column",
});

export const message = style({
  marginBottom: vars.space.medium,
  maxWidth: "90%",
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

// AI 버블 내부의 마크다운 스타일
export const markdownPre = style({
  margin: "8px 0",
  padding: "12px",
  backgroundColor: "#e5e7eb",
  borderRadius: vars.borderRadius.small,
  overflowX: "auto",
});

export const markdownCode = style({
  fontFamily: "monospace",
  fontSize: "14px",
});

export const markdownParagraph = style({
  margin: "8px 0",
});

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

export const markdownContainer = style({
  position: "relative",
  display: "inline-block",
  width: "100%",
});

export const markdownList = style({
  paddingLeft: "20px",
  margin: "8px 0",
});

export const markdownListItem = style({
  margin: "4px 0",
});

export const markdownBlockquote = style({
  borderLeft: `4px solid ${vars.color.secondary}`,
  paddingLeft: "12px",
  margin: "8px 0",
  color: "#4B5563",
});

export const markdownLink = style({
  color: vars.color.accent,
  textDecoration: "underline",
});

export const markdownTable = style({
  borderCollapse: "collapse",
  width: "100%",
  margin: "8px 0",
});

export const markdownTableCell = style({
  border: `1px solid ${vars.color.secondary}`,
  padding: "8px",
  textAlign: "left",
});

export const markdownTableHeader = style([
  markdownTableCell,
  {
    backgroundColor: "#e5e7eb",
  },
]);

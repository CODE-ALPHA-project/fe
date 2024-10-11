import { style, createTheme, globalStyle } from "@vanilla-extract/css";

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

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: "Inter, sans-serif",
  backgroundColor: vars.color.background,
  color: vars.color.text,
});

export const container = style({
  display: "flex",
  height: "100vh",
  position: "relative",
});

export const sidebar = style({
  width: "240px",
  borderRight: `1px solid ${vars.color.border}`,
  display: "flex",
  flexDirection: "column",
  backgroundColor: vars.color.background,
  transition: "transform 0.3s ease-in-out",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  transform: "translateX(-100%)",
  zIndex: 1000,
});

export const sidebarOpen = style({
  transform: "translateX(0)",
});

export const sidebarHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.space.medium,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const closeSidebarButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.secondary,
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

export const nav = style({
  flex: 1,
  padding: vars.space.medium,
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  padding: vars.space.small,
  marginBottom: vars.space.small,
  borderRadius: vars.borderRadius.small,
  cursor: "pointer",
  border: "none",
  background: "none",
  width: "100%",
  textAlign: "left",
  color: vars.color.text,
  ":hover": {
    backgroundColor: vars.color.border,
  },
});

export const navIcon = style({
  marginRight: vars.space.small,
});

export const profile = style({
  display: "flex",
  alignItems: "center",
  padding: vars.space.medium,
  borderTop: `1px solid ${vars.color.border}`,
});

export const avatar = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginRight: vars.space.small,
});

export const chatArea = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  marginLeft: "0",
  transition: "margin-left 0.3s ease-in-out",
});

export const chatAreaWithSidebar = style({
  marginLeft: "240px",
});

export const chatHeader = style({
  padding: vars.space.medium,
  borderBottom: `1px solid ${vars.color.border}`,
  display: "flex",
  alignItems: "center",
});

export const menuButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  marginRight: vars.space.medium,
});

export const chatTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
});

export const chatBack = style({
  //   fontSize: "1.25rem",
  //   fontWeight: 600,
  marginLeft: "auto",
  cursor: "pointer",
});

export const chatMessages = style({
  flex: 1,
  padding: vars.space.medium,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

export const message = style({
  marginBottom: vars.space.medium,
});

export const userMessage = style([
  message,
  {
    textAlign: "right",
  },
]);

export const aiMessage = style([
  message,
  {
    textAlign: "left",
  },
]);

export const messageBubble = style({
  display: "inline-block",
  padding: vars.space.small,
  borderRadius: vars.borderRadius.medium,
  maxWidth: "70%",
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

export const inputArea = style({
  padding: vars.space.medium,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
});

export const inputForm = style({
  display: "flex",
  maxWidth: "800px",
  width: "100%",
});

export const input = style({
  flex: 1,
  padding: vars.space.small,
  borderRadius: "9999px",
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  marginRight: vars.space.small,
  maxWidth: "calc(100% - 40px)",
});

export const sendButton = style({
  padding: vars.space.small,
  borderRadius: "9999px",
  border: "none",
  backgroundColor: vars.color.accent,
  color: vars.color.background,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  flexShrink: 0,
});

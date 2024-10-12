import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

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

import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

// 백드롭 스타일
export const backdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  zIndex: 999,
});

export const backdropVisible = style({
  opacity: 1,
  visibility: "visible",
});

// 사이드바 스타일
export const sidebar = style({
  width: "280px",
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
  boxShadow: "4px 0 8px rgba(0, 0, 0, 0.1)",
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
  height: "60px",
});

export const closeSidebarButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: vars.color.secondary,
  padding: "8px",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.border,
  },
});

export const logo = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.color.text,
});

export const nav = style({
  flex: 1,
  padding: vars.space.medium,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  padding: "10px 12px",
  borderRadius: vars.borderRadius.small,
  cursor: "pointer",
  border: "none",
  background: "none",
  width: "100%",
  textAlign: "left",
  color: vars.color.text,
  fontSize: "14px",
  fontWeight: "500",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.border,
  },
});

export const navIcon = style({
  marginRight: "12px",
  color: vars.color.secondary,
});

export const profile = style({
  display: "flex",
  alignItems: "center",
  padding: vars.space.medium,
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
});

export const avatar = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginRight: vars.space.small,
  objectFit: "cover",
});

export const userName = style({
  fontSize: "14px",
  fontWeight: "500",
  color: vars.color.text,
});

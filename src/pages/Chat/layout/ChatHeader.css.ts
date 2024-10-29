import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const chatHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  height: "56px",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const leftSection = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const rightSection = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const button = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.text,
  borderRadius: "8px",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

export const chatTitle = style({
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "600",
  margin: 0,
  color: vars.color.text,
});

export const connectionStatus = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "6px 12px",
  borderRadius: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.03)",
});

export const connectedText = style({
  color: "#16a34a",
  fontSize: "14px",
  fontWeight: "500",
});

export const disconnectedText = style({
  color: "#dc2626",
  fontSize: "14px",
  fontWeight: "500",
});

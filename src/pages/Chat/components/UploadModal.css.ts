import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  zIndex: 1000,
});

export const optionsContainer = style({
  backgroundColor: "#ffffff",
  padding: "20px",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  position: "relative",
});

export const closeButton = style({
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#4b5563",
});

export const optionButton = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "10px",
});

export const optionIcon = style({
  width: "60px",
  height: "60px",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "8px",
  backgroundColor: "#6366f1",
  color: "#ffffff",
});

export const optionLabel = style({
  fontSize: "14px",
  color: "#4b5563",
  textAlign: "center",
  fontWeight: "500",
});

import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "768px";

export const sidebar = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "80%",
  maxWidth: "300px",
  height: "100%",
  backgroundColor: "#fff",
  boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      display: "none",
    },
  },
});

export const sidebarOpen = style({
  transform: "translateX(0)",
});

export const sidebarHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #eee",
});

export const sidebarLogo = style({
  fontSize: "24px",
  fontWeight: "bold",
});

export const sidebarCloseButton = style({
  fontSize: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const sidebarContent = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  fontWeight: "550",
});

export const sidebarWelcome = style({
  marginBottom: "20px",
});

export const sidebarLoginButton = style({
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  marginBottom: "20px",
  cursor: "pointer",
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 999,
  display: "none",
});

export const overlayVisible = style({
  display: "block",
});

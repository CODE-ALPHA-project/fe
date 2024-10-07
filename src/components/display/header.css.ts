import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "768px";

export const header = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid #eee",
  padding: "10px 0",
});

export const top = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 15px",
  height: "50px",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      padding: "0 30px",
    },
  },
});

export const menuIcon = style({
  fontSize: "24px",
  cursor: "pointer",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      display: "none",
    },
  },
});

export const logo = style({
  fontSize: "24px",
  fontWeight: "bold",
  cursor: "pointer",
});

export const searchForm = style({
  display: "none",
  alignItems: "center",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      display: "flex",
      flexGrow: 1,
      maxWidth: "400px",
      margin: "0 20px",
    },
  },
});

export const searchInput = style({
  flexGrow: 1,
  border: "1px solid #eee",
  borderRadius: "20px",
  padding: "5px 15px",
  fontSize: "14px",
  "::placeholder": {
    color: "#888",
  },
  ":focus": {
    outline: "none",
    borderColor: "#007bff",
  },
});

export const searchButton = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  marginLeft: "10px",
});

export const userActions = style({
  display: "flex",
  gap: "1rem",
});

export const userMenu = style({
  fontSize: "13px",
  fontWeight: "550",
  cursor: "pointer",
});

export const loginMenu = style({
  color: "gray",
});

export const signupMenu = style({
  color: "black",
});

export const navigation = style({
  display: "none",
  justifyContent: "center",
  gap: "30px",
  padding: "10px 0",
  borderTop: "1px solid #eee",
  "@media": {
    [`screen and (min-width: ${mobileBreakpoint})`]: {
      display: "flex",
    },
  },
});

export const navItem = style({
  fontSize: "14px",
  fontWeight: "550",
  cursor: "pointer",
  ":hover": {
    color: "#007bff",
  },
});

export const desktopHeader = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid #eee",
});

export const desktopTop = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 30px",
});

export const desktopSearchForm = style({
  display: "flex",
  alignItems: "center",
  maxWidth: "400px",
  width: "100%",
});

export const desktopSearchInput = style({
  flexGrow: 1,
  border: "1px solid #eee",
  borderRadius: "20px",
  padding: "5px 15px",
  fontSize: "14px",
});

export const desktopSearchButton = style({
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  marginLeft: "10px",
});

export const desktopUserActions = style({
  display: "flex",
  gap: "20px",
});

export const desktopNav = style({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  padding: "10px 0",
  borderTop: "1px solid #eee",
});

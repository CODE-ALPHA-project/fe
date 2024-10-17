import { style } from "@vanilla-extract/css";
import { vars } from "../ChatPage.css";

export const chatHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  height: "48px",
});

export const menuButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.text,
});

export const chatTitle = style({
  fontSize: "16px",
  fontWeight: "600",
  margin: 0,
});

export const homeButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.text,
});

export  const connectionStatus=style( {
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
  selectors:{
    "&span":{
      marginLeft: "5px",
      fontSize: "14px",
    }
  }
});
